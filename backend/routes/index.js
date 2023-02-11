const express = require('express');
const router = express.Router({mergeParams:true});

const kitchenPlanRouter = require('./kitchenPlan');

router.use(kitchenPlanRouter);

module.exports = router;