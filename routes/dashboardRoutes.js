const express = require('express');
const router = express.Router();
//Importing model
const Registration = require('../models/User');
//structure of a route
router.get('/dashboard',(req,res) =>{
res.render('dashboardAO');
})
router.post('/dashboard',async(req,res) =>{
    console.log(req.body);
   
});
router.get('/dashboardfo',(req,res) =>{
    res.render('dashboardFO');
    })
    router.post('/dashboardfo',async(req,res) =>{
        console.log(req.body);
       
    });
    router.get('/dashboarduf',(req,res) =>{
        res.render('dashboardUF');
        })
        router.post('/dashboarduf',async(req,res) =>{
            console.log(req.body);
           
        });


//This is the last line always
module.exports = router;