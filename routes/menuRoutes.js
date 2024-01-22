const express = require('express');
const router = express.Router();

const menu = require('../models/menu')

// C- Create opertion , rendering menu data at frontend by .get method of http
router.get('/', async(req,res)=>{
    try{
        const data = await menu.find();
        console.log(`Menu data Fetched `)
        res.status(200).json(data);
    }
    catch(err){
        console.log(`Error in fetching menu data`);
        res.status(err.message).json({error:'Internal Server Error'})
    }
})

// C- fetching data of specific type 
router.get('/:taste' ,async(req,res)=>{
    try{
        const tasteType = req.params.taste;
        if ( tasteType=='sweet' || tasteType == 'sour' || tasteType == 'spicy'){
            const data = await menu.find({taste:tasteType});
            console.log(` ${tasteType} data found in menu`);
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error:`${tasteType} data Not Found in menu`})
        }
    }
    catch(err){
        console.log(`Error in fetching menu data`);
        res.status(err.message).json({error:'Internal Server Error'})
    }
})
// R- Read operation eg, taking data from client side and saving in dbs
router.post('/', async(req,res)=>{
    try{
        const data = req.body ;
        const menuData = new menu(data) ;
        const savedData = await menuData.save()
        console.log(`${savedData.name} data saved successfully`)
        res.status(200).json({message:`${savedData.name} data saved Successfully`})
    }
    catch(err){
        console.log(`Error in saving menu data ${err}`)
        res.status(err.message).json({error:'Internal Server Error'})
    }
})

//U-update operation
router.put('/:id', async(req,res)=>{
    try{
        const tasteId = req.params.id;
        const menuData = req.body ;
        const response = await menu.findByIdAndUpdate(tasteId,menuData,{
            new: true,
            runValidators: true
        });
        if ( !response ){
            res.status(404).json({error:`Data Not Found in menu`})
        }
        console.log(`Data updated in menu`);
        res.status(200).json({message:'Data updated in Menu successfully'})
    }
    catch(err){
        console.log(`Error in updating menu data`);
        res.status(err.message).json({error:'Internal Servre Error'})
    }
} )

// D-delete Opearation
router.delete('/:id', async(req,res)=>{
    try{
        const tasteId = req.params.id;
        const response = await menu.findByIdAndDelete(tasteId);
        if ( !response ){
            res.status(404).json({error:'Data Not Found in Menu'})
        }
        console.log('Data deleted in menu ')
        res.status(200).json({message:`Data deleted in menu successfully`})
    } 
    catch(err){
        console.log(`Error in deleting menu data`);
        res.status(err.message).json({error:'Internal Servre Error'})
    }
})


module.exports = router ;