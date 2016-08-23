var mongoose = require('mongoose');

var classSurveySchema = new mongoose.Schema({
  questionOne: {
    type: Number,
    required: true
  },
  questionTwo: {
    type: Number,
    required: true
  },
  datetaken : { type : Date, default: Date.now }
});

var ClassSurvey = mongoose.model('ClassSurvey', classSurveySchema);

module.exports = ClassSurvey;
