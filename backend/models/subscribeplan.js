const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

//create a new schema with models here

const SubscribePlanSchema = new Schema({
  
  plan: {
    type: ObjectId,
    ref: 'Create Plan',
  },

  user: {
    type: ObjectId,
    ref: 'User',
  },

  date: {
    type: String,
    ref: 'Date',
  },
  
});

//remember to export the schema
module.exports = mongoose.model('Subscribe Plan', SubscribePlanSchema);
