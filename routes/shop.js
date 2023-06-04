const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>This is Shop Router in the other file</h1>')
})


module.exports=router;