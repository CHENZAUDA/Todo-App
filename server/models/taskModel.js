const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        task: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    { timestamps: true }
)

const Task = mongoose.model('task', taskSchema);
module.exports = Task