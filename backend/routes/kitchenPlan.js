const express = require('express');
const router = express.Router();

const kitchenPlanCtrl = require('../controllers/kitchenPlanController');

router.post("/kitchenPlan", kitchenPlanCtrl.saveKitchenPlan);

module.exports = router;