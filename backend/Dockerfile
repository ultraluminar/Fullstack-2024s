FROM node:22.1-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

RUN npx tsc

ENTRYPOINT ["npm", "start"]