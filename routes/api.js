const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/todos", (req, res, next) => {
  Todo.find()
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/todos", (req, res, next) => {
  if (req.body.task) { // Check if the 'task' property is present in the request body
    const myTask = new Todo({
      task: req.body.task,
      success: false, 
    });

    myTask
      .save()
      .then((data) => res.send("Item saved to database"))
      .catch(next);
  } else {
    res.json({
      error: "The 'task' field is empty or missing in the input",
    });
  }
});


router.patch("/todos/:id", (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ status: "Succcess" }))
    .catch(next);
});

router.delete("/todos/:id", (req, res, next) => {
  try {
    Todo.findOneAndDelete({ _id: req.params.id })
      .then((data) => res.json({ status: "Succcess" }))
      .catch(next);
  } catch (error) {
    res.json({
      error: "The input field is empty",
    });
  }
});

module.exports = router;
