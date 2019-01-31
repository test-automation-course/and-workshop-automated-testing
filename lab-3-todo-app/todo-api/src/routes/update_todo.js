const validationResult = require("express-validator/check/validation-result");
const Todo = require("../models/todo");

module.exports = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.sendStatus(400);
  }

  await Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(data => (data ? res.sendStatus(204) : res.sendStatus(404)))
    .catch(() => {
      res.sendStatus(500);
    });
};
