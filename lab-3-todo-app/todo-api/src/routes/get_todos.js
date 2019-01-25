const Todo = require("../models/todo");

module.exports = (req, res, next) => {
  Todo.find()
    .then(data => res.json(data))
    .catch(next);
};
