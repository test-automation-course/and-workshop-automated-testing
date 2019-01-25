const { validationResult } = require("express-validator/check");
const errorFormatter = require("../validators/error_formatter");

module.exports = (req, res) => {
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      code: "400",
      errors: errors.array({ onlyFirstError: true })
    });
  }

  return res.send({});
};
