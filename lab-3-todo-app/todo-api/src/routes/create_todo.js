const { validationResult } = require("express-validator/check");
const errorFormatter = require("../validators/error_formatter");
const Todo = require("../models/todo");

module.exports = async (req, res, next) => {
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      code: "400",
      errors: errors.array({ onlyFirstError: true })
    });
  }

  await Todo.create(req.body)
    .then(data => res.json(data))
    .catch(next);
};
