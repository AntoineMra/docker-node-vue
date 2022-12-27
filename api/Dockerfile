FROM node:16-alpine
WORKDIR /usr/src/server
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 7000
CMD [ "npm", "run", "dev" ]