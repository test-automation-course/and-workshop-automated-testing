require("dotenv").config();
const logger = require("pino")();
const mongoose = require("mongoose");
const server = require("./server");

const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/todos";

mongoose.connect(mongoURI, { useNewUrlParser: true });

server.listen(port, () => {
  logger.info(`Running service on port ${port} using NODE_ENV: ${env}`);
});
