FROM node:22.1-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

RUN npx tsc

CMD exec npm start