# Dependencies stage
FROM node:23-alpine3.20 AS deps
WORKDIR /app

# 在Alpine上使用apk而非apt-get
RUN apk update && \
    apk upgrade && \
    apk add --no-cache curl

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Build stage
FROM node:23-alpine3.20 AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy everything except what's in .dockerignore
COPY . .

# If using next.config.ts, compile it first
RUN if [ -f next.config.ts ]; then \
    npx tsc next.config.ts --allowJs --esModuleInterop --outDir ./dist; \
    cp ./dist/next.config.js ./next.config.js; \
    fi

# Build the application
RUN npm run build

# Install production dependencies
RUN npm prune --production

# Production stage - 使用較小的基礎映像
FROM node:23-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# 在最終映像上執行安全更新
RUN apk update && \
    apk upgrade && \
    apk add --no-cache curl

# Copy necessary files from builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# 降低容器權限 - 創建非root用戶運行應用
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs
    
USER nextjs

# Expose port
EXPOSE 3000

# 設置健康檢查
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["npm", "start"]