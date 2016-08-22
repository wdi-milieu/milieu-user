var mongoose = require('mongoose');

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
    unique: true,
    match:  /^\w+@[a-za-z_]+?\.[a-za-z]{2,3}$/
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
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
