const express = require('express');
const router = express.Router();

const dishesCtrl = require('../controllers/dishesController');

router.post("/dishes", dishesCtrl.saveDishes);
router.get("/dishes", dishesCtrl.getDishes);
router.get("/dishes/:id", dishesCtrl.getDishes);
router.delete("/dishes/:id", dishesCtrl.deleteDish);


module.exports = router;