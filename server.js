const express = require('express')
const app = express();
const db = require('./db') ;
require('dotenv').config();
const PORT = process.env.PROT || 3000 ;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

//const person = require('./models/person')
//const menu = require('./models/menu');


// Home page 
app.get('/' , (req,res)=>{
    res.send(`Welcome to my Restaurant!!`);
})


//importing menu routes
const menuRoute = require('./routes/menuRoutes');
app.use('/menu',menuRoute);

// importing person routes
const personRoute = require('./routes/personRoutes') ;
app.use('/person', personRoute );

app.listen(PORT, ()=>{
    console.log(`Server is listening at port: ${PORT}`)
})