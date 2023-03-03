const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

//create a new schema with models here

const DynamicFieldSchema = new Schema({
  key: {type: String},
  info: {type: String}
});

const CreatePlanSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide the name of the plan'],
  },

  price: {
    type: String,
    required: true,
  },

  dynamicfields: [DynamicFieldSchema],

  user: {
    type: ObjectId,
    ref: 'User',
  },

  username: {
    type: String,
    required: true,
  }
  
});

//remember to export the schema
module.exports = mongoose.model('Create Plan', CreatePlanSchema);
