let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  id: {type: 'String', required: true, unique: true},
  flightID: {type: 'String', required: true},
  price: {
  			economy:{type:'Number', required: true},
  			business:{type:'Number', required: true},
  			firstClass:{type:'Number', required: true}
  		},
  operator: {type: 'String',required: true},
  departureTime: {type: 'Long',required:true},
  arrivalTime: {type: 'Long',required:true},
  duration:{type:'String', required: true},
  origin: {type: 'String'},
  destination: {type: 'String'},
  operatorImage: {data: 'Buffer', contentType: 'String'},
  dateAdded: {type: 'Date', default: Date.now},	
});

module.exports = mongoose.model('Flight', flightSchema);
