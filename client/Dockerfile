FROM node:lts-alpine

WORKDIR /usr/src/client

COPY ./package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--port" , "3000", "--host"]