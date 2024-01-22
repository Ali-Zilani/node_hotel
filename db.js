const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DB_URL;
mongoose.connect(url)
.then(()=>{
    console.log(`Connected to MongoDB server`)
})
.catch((err)=>{
    console.log(`Error in Connecting to MongoDB server : ${err}`)
})
const db = mongoose.connection ;
module.exports = db ;
