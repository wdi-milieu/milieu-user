var mongoose = require('mongoose');

var Survey = mongoose.model('Survey');

var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    // custom validator for password field
    validate: [
     function(password) {
       return password.length >= 6;
     },
     'Password should be at least 6 characters'
    ]
  },
  gender: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  ethnicity: {
    type: Number,
    required: true
  },
  householdIncome: {
    type: Number,
    required: true
  },
  politicalParty: {
    type: Number,
    required: true
  },
  timeOnline: {
    type: Number,
    required: true
  },
  survey: Survey.schema
});

var User = mongoose.model('User', userSchema);

module.exports = User;
