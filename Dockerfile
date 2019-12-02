FROM node:11-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY src/ ./src

RUN yarn build

CMD ["node", "build/main.js"]