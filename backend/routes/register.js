var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var cors=require('cors') 
var users = require('../model/users')

// Showing register form
router.get("/", function (req, res) {
    res.render("register");
});
  
// Handling user signup
router.post("/", async (req, res) => {
     // check if the user exists
     const user = await users.findOne({ email: req.body.email });
     if (user) {
        res.status(400).json(user);
     } else {
        const newuser = await users.create({
            email: req.body.email,
            password: req.body.password,
            role:'job'
          });
          res.status(200).json(newuser);
     }

});


module.exports = router;
