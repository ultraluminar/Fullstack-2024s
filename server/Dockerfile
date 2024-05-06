FROM node:22.1-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm exec tsc

#TODO: move EXPOSE into docker-compose ?
EXPOSE 3000 
CMD npm start
