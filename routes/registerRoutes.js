const express = require('express');
const router = express.Router();
//Importing model
const Registration = require('../models/User');
//structure of a route
router.get('/register',(req,res) =>{
res.render('registration');
})
//check if something entered is alredy existing in the database
router.post('/register',async(req,res) =>{
    console.log(req.body);
    try{
        const user = new Registration(req.body);
        let uniqueExist = await Registration.findOne({foid:req.body.foid});
        let ninNumberExist = await Registration.findOne({nid:req.body.nid});
        if (uniqueExist){
            return res.status(400).send("Sorry foid you entered is aready existing");
        }else if (ninNumberExist){
             return res.status(400).send("Sorry the nid you entered already exists");   
        }else{
        await Registration.register(user, req.body.password, (error) =>{
            if (error) {
                throw error
            }
            res.send('registration successful');
        });
    }
    }catch (error) {
        res.status(400).send("Sorry we are updating system");
        console.log('error');
    }
   
});
//selecting items from the database
router.get("/FarmerOneList", async (req,res)=> {
    try{
        let farmerones = await Registration.find({ role: "FO"});
        res.render("FOList", {farmerones:farmerones});
    } catch (error) {
        res.status(400).send("Unable to find Farmer One in the database")
    }
})


//This is the last line always
module.exports = router;