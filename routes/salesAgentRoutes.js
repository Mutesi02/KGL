const express =require('express');
const router = express.Router();

router.get('/salesAgents',(req,res) =>{
    res.render("salesAgent");
});
module.exports=router;