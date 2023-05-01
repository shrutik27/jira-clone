var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var cors=require('cors') 
var users = require('../model/users')
var  jwt =require("jsonwebtoken")


const jwtkey="shrutiksecretkey123"
 
// Showing login form
router.get("/", function (req, res) {
  res.render("register");
});

// Handling user login
router.post("/", async (req, res) => {
   // check if the user exists
   const user = await users.findOne({ email: req.body.email ,password:req.body.password });
   if (user) {
      res.status(200).json(user)
   } else {
      res.status(400).json("Email and Password dont match")
   }

});


module.exports = router;
