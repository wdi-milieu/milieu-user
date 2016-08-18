var mongoose = require('mongoose');

var User = mongoose.model('User');

var surveySchema = new mongoose.Schema({
  brandName: String,
  question: String,
  score: Number,
  user: User.schema
});

var Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;

// postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, for reference if User.schema fail
