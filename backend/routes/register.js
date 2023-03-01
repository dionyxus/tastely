const router = require('express').Router();

//import model
const userModel = require('../models/users');

//create post route
router.post ("/register",  (req,res) => {
    const {name, email, password, usertype, address, postalcode, contact} = req.body;

    userModel.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        }
        else {
            try {
                const newUser = userModel({
                    name,
                    email,
                    password,
                    usertype,
                    address,
                    postalcode,
                    contact
                });
            
                const saveItem = newUser.save();
                res.status(200).json(saveItem);
            
              } catch (err) {
                res.status(500).json(err.message);
              }
        }
    })
    
});

//craete get route
router.get('/allkitchens', async (req, res) => {
    try {
      const allKitchenOwners = await userModel.find({});
      res.status(200).json(allKitchenOwners);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

module.exports = router;