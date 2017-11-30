let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  id: {type: 'String', required: true, unique: true},
  hotelName: {type: 'String', required: true},
  price: {
  			standard:{type:'Number', required: true},
  			delux:{type:'Number', required: true},
  			suite:{type:'Number', required: true}
  		},
  star: {type: 'Number',required: true},
  avgRating: {type: 'Number',required:true},
  noReviews: {type: 'Number',required:true},
  address:{type:'String', required: true},
  city: {type: 'String', required: true},
  state: {type: 'String', required: true},
  zipCode: {type: 'String', required: true},
  hotelImage: {data: 'Buffer', contentType: 'String'},
  dateAdded: {type: 'Date', default: Date.now}
});

module.exports = mongoose.model('Hotel', hotelSchema);
