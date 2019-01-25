require("dotenv").config();
const logger = require("pino")();
const mongoose = require("mongoose");
const server = require("./server");

const env = process.env.NODE_ENV || "development";
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/todos";

mongoose.connect(mongoURI, { useNewUrlParser: true });

server.listen(8080, () => {
  logger.info(`Running service on port 8080 using NODE_ENV: ${env}`);
});
