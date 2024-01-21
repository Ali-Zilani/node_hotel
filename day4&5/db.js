// This file responsible for database(mongodb) and Nodejs connectivity . here we will write database connection code

const mongoose = require('mongoose');

// define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotel' // hotel is database name

mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB server.');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

//Get the default connection
// Mongoose maintains a default connections object represeting the MongoDB connections
const db = mongoose.connection;

// Define event listeners for database connections
// db.on('connected',()=>{
//     console.log('Connected to MongoDB server.');
// })
// db.on('disconnected',()=>{
//     console.log('MongoBD Disconnected.');
// })
// db.on('error',(err)=>{
//     console.log('MongoDB connection error : ' ,err);
// })

// Now ,Export the database connection to main server file
module.exports = db ;