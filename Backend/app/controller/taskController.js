const taskModel = require('../models/TaskModel');
const mongoose = require('mongoose')

//To create a Task - POST
const createTask = async (req, res) => {
    const { title, description } = req.body
    try {
        const task = await taskModel.create({ title: title, description: description })
        res.status(200).json(task)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

//To get all tasks - GET
const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find({});
        res.status(200).json(tasks)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

//To get a single task - GET
const getSingleTask = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Task Not Found" })
    }

    try {
        const singleTask = await taskModel.findById(id)
        res.status(200).json(singleTask)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

//To update a Task - PATCH
const updateTask = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Task Not Found" })
    }
    try {
        const task = await taskModel.findByIdAndUpdate({
            _id:id
        },
        {
            ...req.body
        })
        res.status(200).json(task)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

//To delete a Task - DELETE
const deleteTask = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Task Not Found" })
    }
    try {
        const dltTask = await taskModel.findByIdAndDelete(id)
        res.status(200).json(dltTask)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}


module.exports = { createTask, getTasks, getSingleTask, updateTask, deleteTask };