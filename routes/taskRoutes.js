const express = require('express');
const protect = require('../middlewaere/authMiddleware')
const { createTask, getTasks, getTask, updateTask, deleteTask} = require('../controllers/taskController');

const router =express.Router();

router.post("/task", protect, createTask);
router.get("/tasks", protect, getTasks);
router.get('/task/:id', protect, getTask);
router.patch("/task/:id", protect, updateTask);
router.delete("/task/:id", protect, deleteTask);


module.exports = router;