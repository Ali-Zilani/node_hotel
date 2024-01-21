const mongoose = require('mongoose');

//define schema 
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true // name is required otherwise it will not store data
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum: ['chef','waiter','manager'], // work will be one of the these otherwise it will not store data
        required: true
    },
    mobile:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true,
        unique: true  // no user can enter same email 
    },
    address:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
});

// Create Person model
const person = mongoose.model('person',personSchema);
module.exports = person;