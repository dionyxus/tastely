const mongoose = require('mongoose');

const Schema = mongoose.Schema;



//create a new schema with models here



//remember to export the schema
module.exports = mongoose.model('Dynamic Field', DynamicFieldSchema);
