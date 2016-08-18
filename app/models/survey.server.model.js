var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var surveySchema = new Schema ({
  name: String,
  email: String
});

mongoose.model('Survey', surveySchema);
