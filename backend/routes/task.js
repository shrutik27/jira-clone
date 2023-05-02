var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var cors=require('cors') 
var task = require('../model/task')


const jwtkey="shrutiksecretkey123"
 
// Showing login form
router.get("/", async (req, res)=> {
   const alltask = await task.find({});
   res.status(200).json(alltask)
});

// Handling user login
router.post("/", async (req, res) => {
    const newtask = await task.create({
        email: req.body.email,
        task: req.body.task,
        completed:false
      });
      res.status(200).json(newtask);
});


module.exports = router;
