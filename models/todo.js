const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for todo
const TaskSchema = new Schema({
  task: {
    type: String,
    required: [true, "The todo text field is required"],
  },
  success: {
    type: Boolean,
    default: false,
  },
});
 
//create model for todo
const Todo = mongoose.model("todolist", TaskSchema);
module.exports = Todo;
