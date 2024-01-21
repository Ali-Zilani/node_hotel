const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

const person = require('./models/person');
const menu = require('./models/menu');

app.get('/',(req,res)=>{
    res.send('Welcome to my Hotel.... How can i help you, Sir!!')
}) 


 
// importing routes file of person model
const personRoutes = require( './routes/personRoutes');
app.use( '/person' , personRoutes ); // using personRoutes

// importing routes file of menu model 
const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

const port = 3000 ;
app.listen(port,()=>{ 
    console.log(`Server is listening at port: ${port}`);
})