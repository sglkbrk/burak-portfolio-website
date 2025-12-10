# 1) Builder Stage
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --production=false

COPY . .
RUN npm run build

# 2) Runner Stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000
ENV HOST=127.0.0.1

COPY --from=builder /app ./

RUN npm install --production --ignore-scripts --prefer-offline

EXPOSE 4000

# Sadece localhost'a bind eden komut
CMD ["sh", "-c", "HOST=127.0.0.1 PORT=4000 npm run start"]
