const express = require('express');
const router = express.Router() ;

const menu = require('../models/menu');

// get method for menu all tastes
router.get('/' , (req,res)=>{
    menu.find()
    .then((data)=>{
        console.log('Data Fetched Successfully!')
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log('Error in Fetching data.')
        res.status(500).json({error:'Internal Server error.'})
    })
})
// get method for specific taste
router.get('/:taste' , async(req ,res)=>{
    try{
        const tasteType = req.params.taste ;
        if (tasteType == 'sweet' || tasteType=='sour' || tasteType =='spicy'){
            const data = await menu.find({taste : tasteType });
            console.log(`${tasteType} type ata Fetched`)
            res.status(200).json(data)
        }else{
            res.status(404).json({error:`${tasteType} Not Found.`})
        }

    }catch(err){
        console.log('Error in Fetching menu data ',err);
        res.status(err.message).json({error:'Internal Server Error.'})
    }
})

// Post method for menu
router.post('/',(req,res)=>{
    const data = req.body
    const newMenu = new menu(data);
    newMenu.save()
    .then((savedData)=>{
        console.log(`${savedData.name}'s data Saved Successfully!`)
        res.status(200).json(savedData)
    })
    .catch((err)=>{
        console.log('Error in saving data: ',err)
        res.status(500).json({error: 'Internal Server Error! '})
    })
})
module.exports = router ;