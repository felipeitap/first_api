const express = require("express");
const router = express.Router();
const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getAll);

router.post("/tasks", tasksMiddleware.validateBody, tasksController.createTask);

router.put(
  "/tasks/:id",
  tasksMiddleware.validateBody,
  tasksController.updateTask
);

router.delete("/tasks/:id", tasksController.deleteTask);

module.exports = router;
