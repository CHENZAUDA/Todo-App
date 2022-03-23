const Task = require('../models/taskModel');


const createTask = async (req, res) => {
    try {
        const {task }= req.body
        const newTask = await new Task({
            task: task

        })
        await newTask.save();
        res
            .status(201)
            .json({
                success: true,
                message: "task added success",
                data: newTask,
            }).clone();
    } catch (err) {
        res.status(400)
            .json({
                success: false,
                message: 'create task failed!',
                error: err.message
            })
    }
}
const getAllTask = async (req, res) => {
    try {
        await Task.find({}, (err, result) => {
            if (err) console.log(err);
            res.status(200)
                .json({
                    success: true,
                    message: 'create task success!',
                    data: result
                })
        }).clone();
    }
    catch (err) {
        res.status(400)
            .json({
                success: false,
                message: 'get all task failed',
                error: err.message
            })
    }
}

const updateTask = async (req, res) => {
    try {

        await Task.findByIdAndUpdate(
            { _id: req.params.id },
            { new: true },
            req.body
        )
        res.status(201)
            .json({
                success: true,
                message: 'update task success',
                error: err.message
            }).clone();

    }
    catch (err) {
        res.status(400)
            .json({
                success: false,
                message: 'update task failed',
                error: err.message
            })
    }
}

const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id, (err) => {
            if (err) console.log(err);
            res.status(201)
                .json({
                    success: true,
                    message: 'delete task success'
                })
        }).clone();

    }
    catch (err) {
        res.status(400)
            .json({
                success: false,
                message: 'delete task failed',
                error: err.message
            })
    }
}



module.exports = {
    createTask,
    getAllTask,
    updateTask,
    deleteTask
}