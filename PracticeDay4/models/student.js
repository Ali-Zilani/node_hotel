const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Degree:{
        type: String,
        required: true
    },
    Duration:{
        type:Number,
        required: true
    },
    Branch:{
        type: String,
        required: true
    },
    CGPA:{
        type:Number,
        required: true
    },
    Sports:{
        type:[String],
        enum:['Cricket','Badminton','Basketball','Tennis','Chess'],
        required: true
    },
    Aim:{
        type: String,
        default: 'Good Person'
    }
    
})

const student = new mongoose.model('student',studentSchema);
module.exports = student ;