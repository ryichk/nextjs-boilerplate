FROM node:18

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn

VOLUME [ "/app/node_modules" ]

CMD ["yarn", "dev"]
