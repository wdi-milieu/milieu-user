var mongoose = require('mongoose');

var User = mongoose.model('User');

var surveySchema = new mongoose.Schema({
  brandName: String,
  brandUsage: Number,
  npsScore: Number,
  npsReason: Number,
  user: User.schema
});

surveySchema.virtual('npsCategory')
.get(function()  {
  if ( this.npsScore <= 6 ) {
    return "Detractors";
  } else if ( this.npsScore > 6 && this.npsScore < 9 )  {
    return "Passive";
  } else if ( this.npsScore > 8 ) {
    return "Promoters";
  }
});

surveySchema.set('timestamps', {});

var Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;

// postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, for reference if User.schema fail
