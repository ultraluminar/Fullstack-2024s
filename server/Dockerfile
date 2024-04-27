FROM node:21.7.3-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#TODO: move EXPOSE into docker-compose ?
EXPOSE 3000 
CMD npm run dev
