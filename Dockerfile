FROM node:16-alpine
WORKDIR /web-front
COPY . /web-front

RUN yarn

CMD ["yarn", "dev"]
