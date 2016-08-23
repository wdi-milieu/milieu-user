//this contains the questions in survey 2
var survey_arr2 = require('../../public/scripts/survey2');
var Survey = require('mongoose').model('ClassSurvey');

module.exports = {

  new: function(req, res){
    res.render('surveys/take2', {
      title: 'WDI4 Survey',
      survey: survey_arr2
    });
  }, //new function closing

  create: function(req, res, next){
    var survey = new Survey(req.body);
    survey.save(function(err){
      if (err) return next(err);
    });
    console.log('save successful');
    res.redirect('/');
  }

}; //module exports closing bracket
