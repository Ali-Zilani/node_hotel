const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to my Hotel , What can i help you ??')
})
app.get('/biryani',(req,res)=>{
    res.send('Sure sir , i would love to serve Buryani')
})
app.get('/samosa',(req,res)=>{
    res.send('Welcome ot North India , Pls Enjoy the Samosa.')
})
app.get('/idly',(req,res)=>{
    let customised_idly = {
        name : 'Rava Idly',
        size : '80 cm diameter',
        is_sambhar : true,
        is_chutney : false
    }
    res.send(customised_idly);
})
app.post('/person',(req,res)=>{
    res.send('Data Saved Successfully !!')
})
app.listen(3000,()=>{
    console.log(`Servre is running at port : 3000`);
})