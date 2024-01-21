const express = require('express');
const router = express.Router();

const person = require('../models/person');

//get all person data 
router.get('/' , (req,res)=>{
    person.find()
    .then((data)=>{
        console.log(`All Person's data fetched successfully.`)
        res.status(200).json(data);
    }).catch((err)=>{
        console.log(`Error in Fetching Person's data :`,err)
        res.status(err.message).json({error:'Internal Server Error'})
    })
})

// Get Method for person of work type
router.get('/:work' , async(req,res)=>{
    try{
        const workType = req.params.work ;
        if ( workType == 'chef' || workType == 'waiter' || workType == 'manager' )
        {
            const data = await person.find({work:workType}) ; 
            console.log(`${workType}'s Data Fetched.`)
            res.status(200).json(data)
        }
        else {
            res.status(404).json({error:`${workType} not found`})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error!'})
    }
})

// Post Method for person
router.post('/',(req,res)=>{
    const data = req.body // new user sending data 

    // Create a new Person document using the Mongoose Model ie person
    const newPerson = new person(data); 
    newPerson.save()
    .then((savedPerson)=>{
        console.log(`${savedPerson.name}'s data saved Successfully!!` )
        res.status(200).json(savedPerson)
    }) 
    .catch((err)=>{
        console.log('Error in saving data :',err)
        res.status(err.message).json({err:'Internet Server error'})
    })
})

// update method (put/patch)
router.put('/:id', async (req,res)=>{
    try{
        const personId = req.params.id ; // extract person id from url , to update
        const personData = req.body; // update data for person

        const response = await person.findByIdAndUpdate(personId , personData ,{
            new: true , // return updated document
            runValidatore: true // run mongoose validation like required , unique , etc
        });
        if(!response){
            res.status(404).json({error:`Person Not Found`})
        }
        console.log('Person data updated ')
        res.status(200).json({message:'Person data updated successfully.'})
    }catch(err){
        console.log('Error in updating data : ',err)
        res.status(err.message).json({error:'Internal Server Error'})
    }
})

// Delete operation by id
router.delete('/:id' , async(req,res)=>{
    try{
        const personId = req.params.id ;
        const response = await person.findByIdAndDelete(personId) ;
        if(!response){
            res.status(404).json({error:`Person Not Found`})
        }
        console.log('Person deleted')
        res.status(200).json({message:'Person data deleted successfully.'})
    }catch(err){
        console.log('Error in deleting data :',err)
        res.status(err.message).json({error: 'Internal Server Error!'})
    }
})

/* Get method to get the person data 
 app.get('/person/:work', (req,res)=>{   // using .then().catch()
    const workType = req.params.work ;
    if ( workType == 'chef' || workType == 'waiter' || workType == 'manager'){
    person.find({work:workType})
    .then((data)=>{
        console.log('Data Fethed!')
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({err: 'Internal Server Error!'})
    }) }
    else{
        res.status(404).json({error: `Invalid Work Type `})
    }
}) */
/* Alternate way of getting data via aync await asnchronous function
app.get('/person', async(req,res)=>{
    try{
        const data = await person.find({name:"Alice"})
        console.log('Data Fetched')
        res.status(200).json(data);
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error!'})
    }
})
*/
module.exports = router;

