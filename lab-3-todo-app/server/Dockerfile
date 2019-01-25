FROM node:10-alpine

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production

COPY app/ ./app/

HEALTHCHECK --interval=5s --retries=10 CMD curl -fs http://localhost:8080/health || exit 1

EXPOSE 8080

CMD NODE_ENV=$NODE_ENV yarn start
