import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  uptime: number;
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  cache: {
    exists: boolean;
    sizeBytes?: number;
  };
}

export async function GET() {
  const startTime = process.hrtime();

  try {
    // Memory usage
    const memoryUsage = process.memoryUsage();
    const totalMemory = memoryUsage.heapTotal;
    const usedMemory = memoryUsage.heapUsed;
    const memoryPercentage = Math.round((usedMemory / totalMemory) * 100);

    // Check Next.js image cache directory
    const cacheDir = path.join(process.cwd(), '.next', 'cache', 'images');
    let cacheExists = false;
    let cacheSizeBytes = 0;

    try {
      if (fs.existsSync(cacheDir)) {
        cacheExists = true;
        // Get cache directory size (non-recursive for performance)
        const files = fs.readdirSync(cacheDir);
        for (const file of files) {
          try {
            const filePath = path.join(cacheDir, file);
            const stats = fs.statSync(filePath);
            if (stats.isFile()) {
              cacheSizeBytes += stats.size;
            }
          } catch {
            // Ignore individual file errors
          }
        }
      }
    } catch {
      // Cache directory doesn't exist or not accessible
    }

    // Determine health status
    let status: HealthStatus['status'] = 'healthy';
    if (memoryPercentage > 90) {
      status = 'unhealthy';
    } else if (memoryPercentage > 75) {
      status = 'degraded';
    }

    const healthStatus: HealthStatus = {
      status,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: {
        used: usedMemory,
        total: totalMemory,
        percentage: memoryPercentage,
      },
      cache: {
        exists: cacheExists,
        sizeBytes: cacheSizeBytes,
      },
    };

    const [seconds, nanoseconds] = process.hrtime(startTime);
    const responseTime = seconds * 1000 + nanoseconds / 1000000;

    return NextResponse.json(
      {
        ...healthStatus,
        responseTimeMs: Math.round(responseTime * 100) / 100,
      },
      {
        status: status === 'unhealthy' ? 503 : 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 503,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      },
    );
  }
}
