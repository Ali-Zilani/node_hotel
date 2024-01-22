const express = require('express');
const router = express.Router();

const person = require('../models/person')


// C- Create operation ie. showing data to fronted via.get method of http
router.get('/', async(req,res)=>{
    try{
        const data = await person.find();
        console.log(` Data Fetched successfully.`)
        res.status(200).json(data);
    }
    catch(err){
        console.log(`Error in Fetching Person data ${err}`)
        res.status(err.message).json({error:'Internal Server Server'})
    }
})

// C- operatin : find data on basis of workType 
router.get('/:work', async(req,res)=>{
    try{
        const workType = req.params.work ;
        if ( workType =='chef' || workType == 'manager' || workType == 'waiter'){
            const data = await person.find({work:workType})
            console.log(`${workType} data fetched`)
            res.status(200).json(data); 
        }
        else{
            res.status(404).json({error: ` ${workType} Not Found `})
        }
    } 
    catch(err){
        console.log(`Error in Fetching data of ${workType} : ${err}`);
        res.status(err.message).json({error:'Internal Server Error'})
    }
})

//R- Read opreation ie. taking data from clien side and saving via .post method of http
router.post('/', async(req,res)=>{
    try{
        const data = req.body ; // receiving data from client
        const personData = new person(data) ;  // create a new person
        const savedData = await personData.save() ; // saving data
        console.log(`${savedData.name}'s data saved successfully`)
        res.status(200).json({message:`${savedData.name}'s data saved successfully`});
    }
    catch(err){
        console.log(`Error in saving Person data ${err}`)
        res.status(err.message).json({error:'Internal Server Error'})
    }
})

//U- Update operatio ie, updating person data by taking object id of person via .put method of http
router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id ;
        const personData = req.body; // extracting data from body
        const response = await person.findByIdAndUpdate(personId,personData,{
            new: true,
            runValidators: true
        })
        if ( !response ){
            res.status(404).json({error:'Person Not Found'})
        }
        console.log(`Person data updated `);
        res.status(200).json({message:'Person data updated Successfully'})
    }
    catch(err){
        console.log(`Error in updating person data: ${err}`);
        res.status(err.message).json({error:'Internal Server Error'})
    }
})

//D- Delete opration ie, deleting person data by taking object id person via .delete method of http
router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id ;
        const response = await person.findByIdAndDelete(personId);
        if ( !response ){
            res.status(404).json({error:'Person Not Found'})
        }
        console.log('Person data deleted')
        res.status(200).json({message:`Person data deleted successfully`})
    }
    catch(err){
        console.log(`Error in deleting person data ${err}`);
        res.status(err.message).json({error:'Internal server Error'})
    }
})

module.exports = router ;