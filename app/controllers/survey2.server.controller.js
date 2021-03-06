//this contains the questions in survey 2
var survey_arr2 = require('../../public/scripts/survey2');
var Survey = require('mongoose').model('ClassSurvey');
var _ = require('underscore');

var question1, question2, question3, question4, question5, question6;

var mergeQuestionResult = [];

Survey.aggregate([
  { $group: {
    _id: "$questionOne",
    total: { $sum: 1}
    }
  },
  { $group: {
    _id: "questionOne",
    opt1: { $sum: { $cond: [
      { $eq: ["$_id", 1 ]},
      "$total",
      0
    ]}},
    opt2: { $sum: { $cond: [
      { $eq: ["$_id", 2 ]},
      "$total",
      0
    ]}}
  }
  },
  { $sort: { '_id': 1}}
],function(err,result1){
  question1 = result1;
});


Survey.aggregate([
  { $group: {
    _id: "$questionTwo",
    total: { $sum: 1}
    }
  },
  { $group: {
    _id: "questionTwo",
    opt1: { $sum: { $cond: [
      { $eq: ["$_id", 1 ]},
      "$total",
      0
    ]}},
    opt2: { $sum: { $cond: [
      { $eq: ["$_id", 2 ]},
      "$total",
      0
    ]}},
    opt3: { $sum: { $cond: [
      { $eq: ["$_id", 3 ]},
      "$total",
      0
    ]}}
  }
  },
  { $sort: { '_id': 1}}
],function(err,result2){
  question2 = result2;
});

Survey.aggregate([
  { $group: {
    _id: "$questionThree",
    total: { $sum: 1}
    }
  },
  { $group: {
    _id: "questionThree",
    opt1: { $sum: { $cond: [
      { $eq: ["$_id", 1 ]},
      "$total",
      0
    ]}},
    opt2: { $sum: { $cond: [
      { $eq: ["$_id", 2 ]},
      "$total",
      0
    ]}},
    opt3: { $sum: { $cond: [
      { $eq: ["$_id", 3 ]},
      "$total",
      0
    ]}}
  }
  },
  { $sort: { '_id': 1}}
],function(err,result3){
  question3 = result3;
});

Survey.aggregate([
  { $group: {
    _id: "$questionFour",
    total: { $sum: 1}
    }
  },
  { $group: {
    _id: "questionFour",
    opt1: { $sum: { $cond: [
      { $eq: ["$_id", 1 ]},
      "$total",
      0
    ]}},
    opt2: { $sum: { $cond: [
      { $eq: ["$_id", 2 ]},
      "$total",
      0
    ]}},
    opt3: { $sum: { $cond: [
      { $eq: ["$total", 3 ]},
      "$total",
      0
    ]}}
  }
  },
  { $sort: { '_id': 1}}
],function(err,result4){
  question4 = result4;
});


Survey.aggregate([
  { $group: {
    _id: "$questionFive",
    total: { $sum: 1}
    }
  },
  { $group: {
    _id: "questionFive",
    opt1: { $sum: { $cond: [
      { $eq: ["$_id", 1 ]},
      "$total",
      0
    ]}},
    opt2: { $sum: { $cond: [
      { $eq: ["$_id", 2 ]},
      "$total",
      0
    ]}}
  }
  },
  { $sort: { '_id': 1}}
],function(err,result5){
  question5 = result5;
});


Survey.aggregate([
  { $group: {
    _id: "$questionSix",
    total: { $sum: 1}
    }
  },
  { $group: {
    _id: "questionSix",
    opt1: { $sum: { $cond: [
      { $eq: ["$_id", 1 ]},
      "$total",
      0
    ]}},
    opt2: { $sum: { $cond: [
      { $eq: ["$_id", 2 ]},
      "$total",
      0
    ]}},
    opt3: { $sum: { $cond: [
      { $eq: ["$_id", 3 ]},
      "$total",
      0
    ]}},
    opt4: { $sum: { $cond: [
      { $eq: ["$_id", 4 ]},
      "$total",
      0
    ]}}
  }
  },
  { $sort: { '_id': 1}}
],function(err,result6){
  question6 = result6;
});

module.exports = {

  index: function(req, res){
    //this is for api export & json things

    var classSurveyResult = {};

    // Survey.aggregateResults(function() {
    //
    // });

       classSurveyResult['q1opt1'] = parseInt((question1[0].opt1 / (question1[0].opt1 + question1[0].opt2) )*100);
       classSurveyResult['q1opt2'] = parseInt((question1[0].opt2 / (question1[0].opt1 + question1[0].opt2) )*100);

       classSurveyResult['q2opt1'] = parseInt((question2[0].opt1 / (question2[0].opt1 + question2[0].opt2 + question2[0].opt3) )*100);
       classSurveyResult['q2opt2'] = parseInt((question2[0].opt2 / (question2[0].opt1 + question2[0].opt2 + question2[0].opt3) )*100);
       classSurveyResult['q2opt3'] = parseInt((question2[0].opt3 / (question2[0].opt1 + question2[0].opt2 + question2[0].opt3) )*100);

       classSurveyResult['q3opt1'] = parseInt((question3[0].opt1 / (question3[0].opt1 + question3[0].opt2 + question3[0].opt3) )*100);
       classSurveyResult['q3opt2'] = parseInt((question3[0].opt2 / (question3[0].opt1 + question3[0].opt2 + question3[0].opt3) )*100);
       classSurveyResult['q3opt3'] = parseInt((question3[0].opt3 / (question3[0].opt1 + question3[0].opt2 + question3[0].opt3) )*100);

       classSurveyResult['q4opt1'] = parseInt((question4[0].opt1 / (question4[0].opt1 + question4[0].opt2 + question4[0].opt3) )*100);
       classSurveyResult['q4opt2'] = parseInt((question4[0].opt2 / (question4[0].opt1 + question4[0].opt2 + question4[0].opt3) )*100);
       classSurveyResult['q4opt3'] = parseInt((question4[0].opt3 / (question4[0].opt1 + question4[0].opt2 + question4[0].opt3) )*100);

       classSurveyResult['q5opt1'] = parseInt((question5[0].opt1 / (question5[0].opt1 + question5[0].opt2) )*100);
       classSurveyResult['q5opt2'] = parseInt((question5[0].opt2 / (question5[0].opt1 + question5[0].opt2) )*100);


       classSurveyResult['q6opt1'] = parseInt((question6[0].opt1 / (question6[0].opt1 + question6[0].opt2 + question6[0].opt3 + question6[0].opt4) )*100);
       classSurveyResult['q6opt2'] = parseInt((question6[0].opt2 / (question6[0].opt1 + question6[0].opt2 + question6[0].opt3 + question6[0].opt4) )*100);
       classSurveyResult['q6opt3'] = parseInt((question6[0].opt3 / (question6[0].opt1 + question6[0].opt2 + question6[0].opt3 + question6[0].opt4) )*100);
       classSurveyResult['q6opt3'] = parseInt((question6[0].opt4 / (question6[0].opt1 + question6[0].opt2 + question6[0].opt3 + question6[0].opt4) )*100);


   res.json(classSurveyResult);

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
      res.redirect('https://wdi-milieu.github.io/milieu-client/thankyou.html');
    });
  } // close create function

}; //module exports closing bracket
