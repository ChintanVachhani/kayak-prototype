let mongoose = require('mongoose');

const Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator'); //mongoose plugin that provides extra validation check for unique values

const hotelSchema = new Schema({
  cuid: {type: 'String', required: true, unique: true},
  hotelName: {type: 'String', required: true},
  price: {type: 'Number', required: true},
  star: {type: 'Number', required: true},
  avgRating: {type: 'Number', default: 0},
  noReviews: {type: 'Number', default: 0},
  address: {type: 'String', required: true},
  city: {type: 'String', required: true},
  state: {type: 'String', required: true},
  zipCode: {type: 'String', required: true},
  hotelImage: {data: 'Buffer', contentType: 'String'},
  dateAdded: {type: 'Date', default: Date.now},
});

hotelSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Hotel', hotelSchema);
