# Dependencies stage - 使用 BuildKit cache mount 加速
FROM node:23-alpine3.20 AS deps
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

# 只複製 lock file 先做 fetch（更好的快取層）
COPY pnpm-lock.yaml ./

# 使用 cache mount 快取 pnpm store
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch

# 複製 package.json 並安裝
COPY package.json ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --offline

# Build stage
FROM node:23-alpine3.20 AS builder
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build with standalone output
RUN pnpm run build

# Production stage - 極簡化，使用 standalone 輸出
FROM node:23-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=1536"
# 讓 Next.js standalone server 監聽所有網路介面
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# 合併 RUN 指令減少 layer
RUN apk add --no-cache curl && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# 只複製 standalone 輸出（約 50MB vs 500MB+ 的完整 node_modules）
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD curl -f http://localhost:3000/ || exit 1

# standalone server 直接用 node 執行，不需要 pnpm
CMD ["node", "server.js"]