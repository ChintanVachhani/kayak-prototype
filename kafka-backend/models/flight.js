let mongoose = require('mongoose');

const Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator'); //mongoose plugin that provides extra validation check for unique values

const flightSchema = new Schema({
  flightID: {type: 'String', required: true},
  price: {
    economy: {type: 'Number', required: true},
    business: {type: 'Number', required: true},
    firstClass: {type: 'Number', required: true},
  },
  operator: {type: 'String', required: true},
  departureTime: {type: 'Number', required: true},
  arrivalTime: {type: 'Number', required: true},
  duration: {type: 'String', required: true},
  origin: {type: 'String', required: true},
  destination: {type: 'String', required: true},
  operatorImage: {data: 'Buffer', contentType: 'String'},
  dateAdded: {type: 'Date', default: Date.now},
});

flightSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Flight', flightSchema);
