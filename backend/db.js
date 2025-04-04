const mongoose = require("mongoose");

mongoose
  .connect(
    "your mongodb connection string url"
  )
  .then(() => {
    console.log("Connect to the mongoDB");
  })
  .catch(() => {
    console.log("There is some error loading database");
  });
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("Todo", todoSchema);
module.exports = {
  todo,
};
