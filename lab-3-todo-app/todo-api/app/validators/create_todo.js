const { body } = require("express-validator/check");

const validator = [
  body("text")
    .isLength({ min: 1 })
    .withMessage("must be provided")
];

module.exports = validator;
