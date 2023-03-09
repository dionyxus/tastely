const express = require('express');
const router = express.Router({mergeParams:true});

const kitchenPlanRouter = require('./kitchenPlan');
const dishesRouter = require('./dishes');
const mealRouter = require('./meal');


router.use(kitchenPlanRouter);
router.use(dishesRouter);
router.use(mealRouter);

module.exports = router;