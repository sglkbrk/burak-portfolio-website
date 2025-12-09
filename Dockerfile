# 1) Builder Stage
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --production=false

COPY . .
RUN npm run build

# 2) Runner Stage (En hafif)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app ./

RUN npm install --production --ignore-scripts --prefer-offline

EXPOSE 3000

CMD ["npm", "run", "start"]
