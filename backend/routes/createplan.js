const router = require('express').Router();

//import model
const createPlanModel = require('../models/createplan');
const subscribePlanModel = require('../models/subscribeplan')

//create plan route for kitchen owner
router.post('/createplan', (req, res) => {
 

  try {
    const newCreatePlan = createPlanModel({
      name: req.body.name,
      price: req.body.price,
      user: req.body.user,
      username: req.body.username,
      dynamicfields: req.body.dynamicfields
    });

    const saveItem = newCreatePlan.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post('/subscribeplan', (req, res) => {
  try {
    const newSubscribePlan = subscribePlanModel({
      plan: req.body.plan,
      user: req.body.user,
    });

    //const saveItem = newSubscribePlan.save();
    //res.status(200).json(saveItem);
    newSubscribePlan.save()
    .then(result=>{
    
        const resObj = {
            url: '/api/v1/subscribeplan/' + result._id,
            data: result
        };
    
        res.set('content-location', resObj.url);
        res.status(201).json(resObj);
    
    });

  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/showsubscribeplan/:userid', async (req, res) => {
  try {
    const userid = req.params.userid;
    const planid = req.params.planid;
    const showsubscribeplans = await subscribePlanModel.find({user:userid}).populate("user").populate("plan");
    res.status(200).json(showsubscribeplans);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/showcustomersubscribeplan', async (req, res) => {
  try {
    const planid = req.params.planid;
    // const planid = req.params.planid;
    const showcustomersubscribeplans = await subscribePlanModel.find({}).populate("user").populate("plan");
    res.status(200).json(showcustomersubscribeplans);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//get created plan route for kitchen owner
router.get('/showplan', async (req, res) => {
  try {
    const showplans = await createPlanModel.find({});
    res.status(200).json(showplans);
  } catch (err) {
    res.status(500).json(err.message);
  }
});



//show multiple plans of single kitchen owner for customer
router.get('/showplan/:userid', async (req, res) => {
  try {
    
    const userid = req.params.userid;
    
//    console.log(req.params.userid);
    const singlekitchenplans = await createPlanModel.find({user:userid});
    res.status(200).json(singlekitchenplans);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//delete created plan by kitchen owner
router.delete('/showplan/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleteOnePlan = await createPlanModel.findByIdAndDelete(id);
    res.status(200).json(deleteOnePlan);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete('/showsubscribeplan/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleteOneSubscribePlan = await subscribePlanModel.findByIdAndDelete(id);
    res.status(200).json(deleteOneSubscribePlan);
  } catch (err) {
    res.status(500).json(err.message);
  }
});



//subscribe plans of kitchen owner for customer
   //create plan route for kitchen owner







module.exports = router;

// const { name, price, user, username, dynamicFields } = req.body;