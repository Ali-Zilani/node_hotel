const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

const student = require('./models/student');

app.get('/',(req,res)=>{
    res.type('html').send(`<h3>Welcome to Nit-W, India's top National Institute and You are Lucky to come here..</h3>`)
})

app.post('/student',(req,res)=>{
    const data = req.body ;
    const newStudent = new student(data) ;
    newStudent.save()
    .then((newData)=>{
        console.log(`New Student data saved Successfully!!`)
        res.status(200).json(newData);
    })
    .catch((err)=>{
        console.log(`Error in saving new student data :${err}`);
        res.status(500).json({error:'Internal server error'})
    })
})
app.get('/student', (req,res)=>{
    student.find()
    .then((data)=>{
        console.log(`Data Fetched!!`);
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log(`Error in Fetching student data: ${err}`);
        res.status(500).json({error:`Internal Server Error`});
    })
})

const port = 4000 ;
app.listen(port ,()=>{
    console.log(`Server is listening at port : ${port}`)
})
