let mongoose = require('mongoose');

const Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator'); //mongoose plugin that provides extra validation check for unique values

const userSchema = new Schema({
  id: {type: 'String', required: true},
  firstName: {type: 'String', required: true},
  lastName: {type: 'String', required: true},
  password: {type: 'String', required: true},
  email: {type: 'String', required: true, unique: true},
  dateAdded: {type: 'Date', default: Date.now},
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
