let mongoose = require('mongoose');

const Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator'); //mongoose plugin that provides extra validation check for unique values

const bookingSchema = new Schema({
  userID: {type: 'String', required: true},
  serviceType: {type: 'String', required: true},
  bookingDetail: {
    serviceId: {type: 'String', required: true},
    serviceName: {type: 'String', required: true},
    city: {type: 'String', required: true},
    price: {type: 'Number', required: true},
    dateFrom: {type: 'Date', required: true},
    dateTo: {type: 'Date'},
  },
  dateAdded: {type: 'Date', default: Date.now},
  yearAdded: {type: 'Number'},
  monthAdded: {type: 'Number'},
  cardNumber: {type: 'String'},
  billingZipcode: {type: 'String'},
});

bookingSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Booking', bookingSchema);
