const validationResult = require("express-validator/check/validation-result");
const Todo = require("../models/todo");

module.exports = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.sendStatus(400);
  }

  await Todo.create(req.body)
    .then(data => res.json(data))
    .catch(next);
};
