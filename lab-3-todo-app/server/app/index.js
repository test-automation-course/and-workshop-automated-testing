require("dotenv").config();
const logger = require("pino")();
const server = require("./server");

const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 8080;

server.listen(port, () => {
  logger.info(`Running service on port ${port} using NODE_ENV: ${env}`);
});
