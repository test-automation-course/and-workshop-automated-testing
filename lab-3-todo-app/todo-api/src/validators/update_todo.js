const { body } = require("express-validator/check");

const validator = [
  body("text")
    .isLength({ min: 1 })
    .withMessage("must be provided"),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("must be a valid boolean")
];

module.exports = validator;
