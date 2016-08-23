//this contains the questions in survey 2
var survey_arr2 = require('../../public/scripts/survey2');

module.exports = {

  new: function(req, res){
    res.render('surveys/take2', {
      title: 'WDI4 Survey',
      survey: survey_arr2
    });
  } //new function closing

}; //module exports closing bracket
