const { body } = require("express-validator/check");

const validator = [
  body("name")
    .isLength({ min: 1 })
    .withMessage("must be provided"),
  body("completed")
    .isBoolean()
    .withMessage("must be a valid boolean")
];

module.exports = validator;
