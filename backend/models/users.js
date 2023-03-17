const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create a new schema with models here

const UserSchema = new Schema({

  name: {
    type: String,
    required: [true, 'Please provide title of the assignment'],
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  usertype: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  postalcode: {
    type: String,
    required: true
  },

  contact: {
    type: String,
    required: true
  },

  imageurl: {
    type: String,
    required: true
  }


});

//remember to export the schema
module.exports = mongoose.model('User', UserSchema);