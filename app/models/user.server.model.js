var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  // _id: String,
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
  survey: [{
    type: String,
    ref: 'Survey',
  }]

});

userSchema.pre('save', function(next) {
  var user = this;
  // generate the bcrypt salt
  bcrypt.genSalt(5, function(err, salt) {
    if(err) return next(err);
    // create the hash ==> plain password text + salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        // Store hash in your password DB.
        user.password = hash;
        next();
    });
  });
});

userSchema.methods.auth = function(posted_password, callback) {
  console.log('posted_password is: ' + posted_password);

  bcrypt.compare( posted_password, this.password, function(err, is_match) {
    callback(null, is_match);
  });
};

var User = mongoose.model('User', userSchema);

module.exports = User;
