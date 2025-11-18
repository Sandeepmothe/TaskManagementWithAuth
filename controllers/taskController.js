const Task = require('../models/Task');

//create task

exports.createTask = async (req, res) => {
    const task = new Task({
        ...req.body,
        user: req.user
    });

    await task.save();
    res.json({message: 'Task Created', task})
}


//Get Tasks
exports.getTasks = async (req, res)=>{
    const tasks = await Task.find({user: req.user});
    res.json(tasks);
}

//Update Tasks
exports.updateTask = async (req, res) => {
    const updateTask = await Task.findOneAndUpdate({
        _id: req.params.id,
        user: req.user
    }, req.body, { new: true})

    if(!updateTask) return res.status(404).json({message : "Task not Found"});

    res.json({message: "Task Updeted", updateTask})
}

//Delete Task
exports.deleteTask = async (req, res) => {
    const deleteTask = await Task.findOneAndDelete({
        _id: req.params.id,
        user: req.user
    });

    if (!deleteTask) return res.status(404).json({ message: "Task not Found"});

    res.json({ message: "Task Successfully Deleted", deleteTask});
}