var mongoose = require('mongoose');

var classSurveySchema = new mongoose.Schema({
  mustache: Number,
  datetaken : { type : Date, default: Date.now }
});

var ClassSurvey = mongoose.model('ClassSurvey', classSurveySchema);

module.exports = ClassSurvey;
