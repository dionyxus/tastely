const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DishesSchema = new Schema({
    name:{type:String, required:true, maxLength: 30},
    description:{type:String, required:true, maxLength:256},
    veg:{type:Boolean,required:true,default:true},
    kitchenId:{type:String, required:true, maxLength:256}
});

const Dishes = mongoose.model("Dishes", DishesSchema);

module.exports = Dishes;