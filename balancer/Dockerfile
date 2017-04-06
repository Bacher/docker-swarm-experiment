FROM node:alpine

ENV NODE_ENV="prod"

COPY app/package.json /app/

WORKDIR /app/

RUN npm install

COPY app /app/

CMD node --harmony index.js

EXPOSE 80
