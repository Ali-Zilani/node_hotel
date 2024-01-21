const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/NITW"
mongoose.connect(url)
.then(()=>{
    console.log('Connected to MongoDB Server');
})
.catch((err)=>{
    console.log('Error in Connectig MongoDB Server :',err)
})
const db = mongoose.connection;
module.exports = db ;