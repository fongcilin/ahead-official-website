'use client';

import { useRef, useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { cn } from '@/try-stuff/lib/utils';

type Circle = {
  vx: number;
  vy: number;
  x: number;
  y: number;
  count: number;
};

interface SquirmingCellsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  contentClassName?: string;
}

export const SquirmingCells = ({
  children,
  className,
  contentClassName,
}: SquirmingCellsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { width = 0 } = useWindowSize({ initializeWithValue: false });
  const isSm = width < 640;

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) return;

    const canvas = canvasRef.current;
    if (canvas === null) return;

    const ctx = canvas.getContext('2d');
    if (ctx === null) return;

    // Make it high-res
    const devicePixelRatio = window.devicePixelRatio || 1;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    // Make it responsive
    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuration
    const n = isSm ? 10 : 24; // number of circles
    const v = 3; // velocity
    const baseRadius = 15; // base size of circles
    const numPoints = 50; // points to draw around circle

    // Initialize circles
    const circles: Circle[] = new Array(n).fill(null).map(() => ({
      vx: (Math.random() - 0.5) * v,
      vy: (Math.random() - 0.5) * v,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      count: Math.random() * 1000, // Random starting phase
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#888';
      ctx.lineWidth = 2;

      for (const circle of circles) {
        // Update position
        circle.x += circle.vx;
        circle.y += circle.vy;
        circle.count += 0.1;

        // Bounce off walls
        if (circle.x < baseRadius || circle.x > canvas.width - baseRadius)
          circle.vx *= -1;
        if (circle.y < baseRadius || circle.y > canvas.height - baseRadius)
          circle.vy *= -1;

        // Draw squirming circle
        ctx.beginPath();

        // Calculate points around circle with squirming effect
        for (let i = 0; i <= numPoints; i++) {
          const angle = (i / numPoints) * Math.PI * 2;
          // Add multiple sine waves for more organic movement
          const radiusOffset =
            Math.sin(angle * 3 + circle.count) * 2 +
            Math.sin(angle * 5 - circle.count * 1.5) * 1.5;
          const radius = baseRadius + radiusOffset;

          const x = circle.x + Math.cos(angle) * radius;
          const y = circle.y + Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.closePath();
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isSm]);

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className={cn('relative z-[1]', contentClassName)}>{children}</div>
    </div>
  );
};
