const Todo = require("../models/todo");

module.exports = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id)
    .then(data => (data ? res.sendStatus(204) : res.sendStatus(404)))
    .catch(() => {
      res.sendStatus(500);
    });
};
