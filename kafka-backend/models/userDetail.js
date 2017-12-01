let mongoose = require('mongoose');

const Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator'); //mongoose plugin that provides extra validation check for unique values

const userDetailSchema = new Schema({
  cuid: {type: 'String', required: true, unique: true},
  firstName: {type: 'String', required: true},
  lastName: {type: 'String', required: true},
  address: {type: 'String', default: ""},
  city: {type: 'String', default: ""},
  state: {type: 'String', default: ""},
  zipcode: {type: 'String', default: ""},
  phoneNumber: {type: 'String', default: ""},
  email: {type: 'String', required: true, unique: true},
  profileImage: {data: 'Buffer', contentType: 'String'},
  dateAdded: {type: 'Date', default: Date.now},
});

userDetailSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('UserDetail', userDetailSchema);
