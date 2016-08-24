//this contains the questions in survey 2
var survey_arr2 = require('../../public/scripts/survey2');
var Survey = require('mongoose').model('ClassSurvey');

var question1, question2, question3, question4, question5, question6;

Survey.aggregate([
  { $group: {
    _id: "$questionOne",
    total: { $sum: 1}
    }
  },
  { $sort: { '_id': 1}}
],function(err,result){
  question1 = result;
});


Survey.aggregate([
  { $group: {
    _id: "$questionTwo",
    total: { $sum: 1}
    }
  },
  { $sort: { '_id': 1}}
],function(err,result){
  question2 = result;
});

Survey.aggregate([
  { $group: {
    _id: "$questionThree",
    total: { $sum: 1}
    }
  },
  { $sort: { '_id': 1}}
],function(err,result){
  question3 = result;
});

Survey.aggregate([
  { $group: {
    _id: "$questionFour",
    total: { $sum: 1}
    }
  },
  { $sort: { '_id': 1}}
],function(err,result){
  question4 = result;
});

Survey.aggregate([
  { $group: {
    _id: "$questionFive",
    total: { $sum: 1}
    }
  },
  { $sort: { '_id': 1}}
],function(err,result){
  question5 = result;
});

Survey.aggregate([
  { $group: {
    _id: "$questionSix",
    total: { $sum: 1}
    }
  },
  { $sort: { '_id': 1}}
],function(err,result){
  question6 = result;
});

module.exports = {

  index: function(req, res){
    //this is for api export & json things
    // Survey.find({}, function(err, survey){
    //   if (err) res.status(400).send(err);
    //   res.json(survey);
    // });
    res.json({question1, question2, question3, question4, question5, question6 });
  }, //close index function

  new: function(req, res){
    res.render('surveys/take2', {
      title: 'WDI4 Survey',
      survey: survey_arr2
    });
  }, // close new function

  create: function(req, res, next){
    var survey = new Survey(req.body);
    survey.save(function(err){
      if (err) return next(err); //return next(err);
      console.log('save successful');
      res.redirect('/');
    });
  } // close create function

}; //module exports closing bracket
