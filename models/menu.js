const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    price:{
        type: Number,
        required:true
    },
    taste:{
        type: String,
        enum: ['sweet','spicy','sour'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false // if client sent nothing regarding is_drink it will by default store false
    },
    ingredients:{
        type: [String], // storing array of strings
        default :[]
    },
    sales:{
        type: Number,
        default: 0
    }
})

const menu = mongoose.model('menu',menuSchema);
module.exports = menu 