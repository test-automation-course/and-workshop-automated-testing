const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();
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

TodoSchema.set("toJSON", { virtuals: true });
TodoSchema.plugin(mongooseHidden);

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
