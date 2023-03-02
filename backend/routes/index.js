const express = require('express');
const router = express.Router({mergeParams:true});

const kitchenPlanRouter = require('./kitchenPlan');
const dishesRouter = require('./dishes');


router.use(kitchenPlanRouter);
router.use(dishesRouter);


module.exports = router;