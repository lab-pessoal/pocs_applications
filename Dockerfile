FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=deps /app/node_modules ./node_modules
COPY src ./src
COPY package.json ./package.json

EXPOSE 3000
CMD ["src/server.js"]
