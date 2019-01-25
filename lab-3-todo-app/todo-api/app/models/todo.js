const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: [true, "The text field is required"]
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
