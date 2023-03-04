const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    date:{type:String, required:true, maxLength: 30},
    dishes:{type:Array, required:true},
    customerId:{type:String, required:true, maxLength: 30},
    kitchenId:{type:String, required:true, maxLength: 30},
    planId:{type:String, required:true, maxLength: 30}
});

const Meal = mongoose.model("Meal", MealSchema);

module.exports = Meal;