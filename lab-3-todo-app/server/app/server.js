const express = require("express")();
const bodyParser = require("body-parser").json();
const cors = require("cors")();
const pino = require("express-pino-logger")();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

express
  .use(bodyParser)
  .use(cors)
  .use(pino)
  .use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .get("/health", require("./routes/health_check"))
  .use((req, res) => {
    res.status(404).json({ code: "404", message: "Not Found" });
  });

module.exports = express;
