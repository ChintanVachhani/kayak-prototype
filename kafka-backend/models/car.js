let mongoose = require('mongoose');

const Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator'); //mongoose plugin that provides extra validation check for unique values

const carSchema = new Schema({
  cuid: {type: 'String', required: true, unique: true},
  operator: {type: 'String', required: true},
  class: {type: 'String', required: true},
  price: {type: 'Number', required: true},
  model: {type: 'String', required: true},
  capPersons: {type: 'Number', required: true},
  capBags: {type: 'Number', required: true},
  doors: {type: 'Number', required: true},
  location: {type: 'String', required: true},
  carImage: {data: 'Buffer', contentType: 'String'},
  dateAdded: {type: 'Date', default: Date.now},
});

carSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Car', carSchema);
