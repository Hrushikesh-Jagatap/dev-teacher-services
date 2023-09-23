FROM node:17.9.1 AS build

WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./server.js ./

RUN npm ci --production --no-audit

FROM node:17.9.1-alpine

ARG BUILD_NUMBER
ENV BUILD_NUMBER=${BUILD_NUMBER} 

WORKDIR /usr/src/app
COPY --from=build /usr/src/app ./

COPY src ./src

VOLUME [ "/usr/src/logs" ]

EXPOSE 1203

CMD ["sh", "-c", "NODE_ENV=production npm run-script stg"]
