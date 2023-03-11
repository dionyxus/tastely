const express = require('express');
const router = express.Router();

const mealCtrl = require('../controllers/mealController');

router.post("/meal", mealCtrl.saveMeal);
router.get("/meal", mealCtrl.getMeal);
router.get("/meal/:id", mealCtrl.getMeal);
router.delete("/meal/:id", mealCtrl.deleteMeal);
router.delete("/mealAll",mealCtrl.deleteAllMeals);

module.exports = router;