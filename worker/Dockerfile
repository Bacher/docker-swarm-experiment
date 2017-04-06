FROM node:alpine

ENV NODE_ENV="prod"

COPY app/package.json /app/

WORKDIR /app/

RUN npm install

EXPOSE 9100

COPY app /app/

#CMD node --harmony index.js

ENTRYPOINT ["node", "--harmony", "index.js"]
