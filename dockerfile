# Build stage
FROM node:23-slim AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# If using next.config.ts, compile it first
RUN if [ -f next.config.ts ]; then \
    npx tsc next.config.ts --allowJs --esModuleInterop --outDir ./dist; \
    cp ./dist/next.config.js ./next.config.js; \
    fi

# Build the application
RUN npm run build

# Production stage
FROM node:23-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]