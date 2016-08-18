var mongoose = require('mongoose');

var surveySchema = new mongoose.Schema({
  brandName: String,
  question: String,
  score: Number,
  user_id: Number
});

var Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
