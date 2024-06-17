from node:22.3-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

RUN npm run build

ENTRYPOINT ["npm", "start"]