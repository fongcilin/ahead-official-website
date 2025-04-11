# 构建阶段
FROM node:22-alpine AS builder

WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制源代码
COPY . .

# 如果使用 next.config.ts，需要先编译它
RUN if [ -f next.config.ts ]; then \
    npx tsc next.config.ts --allowJs --esModuleInterop --outDir ./dist; \
    cp ./dist/next.config.js ./next.config.js; \
    fi

# 构建应用
RUN npm run build

# 生产阶段
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# 复制必要的文件
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]