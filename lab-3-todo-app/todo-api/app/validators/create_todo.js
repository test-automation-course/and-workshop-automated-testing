const { body } = require("express-validator/check");

const validator = [
  body("name")
    .isLength({ min: 1 })
    .withMessage("must be provided")
];

module.exports = validator;
