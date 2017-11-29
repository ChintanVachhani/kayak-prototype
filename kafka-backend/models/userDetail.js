let mongoose = require('mongoose');

const Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator'); //mongoose plugin that provides extra validation check for unique values

const userSchema = new Schema({
  id: {type: 'String', required: true, unique: true},
  firstName: {type: 'String', required: true},
  lastName: {type: 'String', required: true},
  address: {type: 'String'},
  city: {type: 'String'},
  state: {type: 'String'},
  zipcode: {type: 'String'},
  phoneNumber: {type: 'String'},
  email: {type: 'String', required: true, unique: true},
  password: {type: 'String', required: true},
  profileImage: {data: 'Buffer', contentType: 'String'},
  dateAdded: {type: 'Date', default: Date.now},
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
