const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://oldmonklovesme:Uz6jx98O0bt7VXE0@cluster-1.bgtjalq.mongodb.net/my-todos"
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
