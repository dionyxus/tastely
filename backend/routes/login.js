const router = require('express').Router();

//import model
const userModel = require('../models/users');

//create post route
router.post ("/login",  (req,res) => {
    const {email, password} = req.body

    userModel.findOne({email: email}, (err, user) => {
        if(user){
           if(password === user.password) {
            res.status(200).json({message: "Login Successfull", user: user})
           } else {
            res.send({message: "Password did not matched"})
           }
        }
        else {
           res.send({message: "User not registered"})
        }
    })
    
});

//create get route

// router.get("/", (req, res) => {
//    res.json('user info')
    
// })

module.exports = router;