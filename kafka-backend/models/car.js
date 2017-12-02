let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
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

module.exports = mongoose.model('Car', carSchema);
