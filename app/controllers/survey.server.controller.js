var Survey = require('mongoose').model('Survey');
var _ = require('underscore');
var brands_arr = require('../../public/scripts/brands');
var survey_arr = require('../../public/scripts/survey');


var totalCount, promotersCount, detractorsCount, npsReason, maleCount, femaleCount;
var mergedRawData = [];
var apiData = [];

Survey.aggregate([
  { $match: { datetaken: { $gte: '2016-08-20T05:46:05.514Z'} }},
  { $group: {
    _id: "$brandName",
    total: { $sum: 1 }
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
  totalCount = result;
});

Survey.aggregate([
  { $match: {
    npsScore: { $gte: 9 },
    datetaken: { $gte: '2016-08-20T05:46:05.514Z'}
  }},
  { $group: {
    _id: "$brandName",
    promoters: { $sum: 1 }
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
  promotersCount = result;
});

Survey.aggregate([
  { $match: {
    npsScore: { $lte: 6 },
    datetaken: { $gte: '2016-08-20T05:46:05.514Z'}
  }},
  { $group: {
    _id: "$brandName",
    detractors: { $sum: 1 }
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
    detractorsCount = result;
});

Survey.aggregate([
  { $match: { datetaken: { $gte: '2016-08-20T05:46:05.514Z'} }},
  { $group: {
    _id: {
      brandName: "$brandName",
      npsReason:"$npsReason"
    },
    count: { $sum: 1 }
  }},
  { $group: {
    _id: "$_id.brandName",
    npsReason1: { $sum: { $cond: [
      { $eq: [ "$_id.npsReason", 1 ]},
      "$count",
      0
    ]}},
    npsReason2: { $sum: { $cond: [
      { $eq: [ "$_id.npsReason", 2 ]},
      "$count",
      0
    ]}},
    npsReason3: { $sum: { $cond: [
      { $eq: [ "$_id.npsReason", 3 ]},
      "$count",
      0
    ]}},
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
    npsReason = result;
});

module.exports = {
  all: function (req, res, next) {
    res.render('surveys/index', {
    title: 'Add A Survey'
    });
  },
  launch: function (req, res, next) {
    res.render('surveys/create', {
      title: 'Make A Survey'
    });
  },
  index: function(req, res, next) {
    for (var i = 0; i < totalCount.length; i++) {
      mergedRawData.push(_.extend({}, totalCount[i], promotersCount[i], detractorsCount[i], npsReason[i] ));
    }

    for(var j = 0; j < totalCount.length; j++)  {
      var brandIndex = mergedRawData[j];

      apiData.push({
      "Brand": brandIndex._id,
      "NPS_Score": parseInt(brandIndex.promoters/brandIndex.total * 100) - parseInt(brandIndex.detractors/brandIndex.total * 100),
      "NPS_Reason1": parseInt(brandIndex.npsReason1/brandIndex.total * 100) + "%",
      "NPS_Reason2": parseInt(brandIndex.npsReason2/brandIndex.total * 100) + "%",
      "NPS_Reason3": parseInt(brandIndex.npsReason3/brandIndex.total * 100) + "%",
      "totalSurvey": brandIndex.total
     });
    }

    res.json({
      apiData,
      // mergedRawData,
    });
  },


  edit: function (req, res, next) {
    res.render('surveys/edit', {
      title: 'Edit a Survey'
    });
  },
  new: function(req, res) {
    res.render('surveys/take', {
      title: 'Take A Survey',
      brands: brands_arr,
      survey: survey_arr
    });
  },


  create: function(req, res, next) {
    for (var i = 0; i < req.body.brandName.length; i++) {
      console.log(req.body);
      console.log(req.body.brandName.length);
      surveyData = {};
      surveyData['brandName'] = req.body.brandName[i];
      surveyData['brandUsage'] = req.body.brandUsage[i];
      surveyData['npsScore'] = req.body.npsScore[i];
      surveyData['npsReason'] = req.body.npsReason[i];
      surveyData['user'] = "testuser";

      var survey = new Survey(surveyData);
      console.log(survey);
      survey.save(function(err) {
        if (err) return next(err);

      });
      res.redirect('/users/dashboard');
    }

  },
  show: function(req, res) {
    res.json(req.survey);
  },
  update: function(req, res, next) {
    Survey.findbyIdAndUpdate(req.survey.id, req.body, function(err, survey) {
      if (err) {
        return next(err);
      } else {
        res.json(survey);
      }
    });
  },
  destroy: function(req, res, next) {
    req.survey.remove(function(err) {
      if(err) {
        return next(err);
      } else {
        res.json(req.survey);
      }
    });
  },
  survey_by_id: function(req, res, next, id) {
    Survey.findOne({
        _id: id
      }, '',
      function(err, survey) {
        if (err) {
          return next(err);
        } else {
          req.survey = survey;
          next();
        }
      });
  }
};
