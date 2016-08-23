var mongoose = require('mongoose');

var surveySchema = new mongoose.Schema({
  mustache: Number,
  user: {
    type: String,
    ref: 'User',
    required: true
  },
  datetaken : { type : Date, default: Date.now }
});
