let mongoose = require('mongoose');

const Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator'); //mongoose plugin that provides extra validation check for unique values

const cardSchema = new Schema({
  cardNumber: {type: 'String'},
  cardName: {type: 'String'},
  expMonth: {type: 'Number'},
  expYear: {type: 'Number'},
  secureCode: {type: 'Number'},
  billingDetail: {
    address: {type: 'String'},
    zipcode: {type: 'String'},
    city: {type: 'String'},
    state: {type: 'String'},
    country: {type: 'String'},
  },
});

cardSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Card', cardSchema);
