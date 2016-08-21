var Survey = require('mongoose').model('Survey');
var _ = require('underscore');

var totalCount, promotersCount, detractorsCount, npsReason;
var mergedData = [];
var apiData = [];

Survey.aggregate([
  { $group: {
    _id: "$brandName",
    total: { $sum: 1 }
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
  totalCount = result;
});

Survey.aggregate([
  { $match: { npsScore: { $gte: 9 }}},
  { $group: {
    _id: "$brandName",
    promoters: { $sum: 1 }
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
  promotersCount = result;
});

Survey.aggregate([
  { $match: { npsScore: { $lte: 6 }}},
  { $group: {
    _id: "$brandName",
    detractors: { $sum: 1 }
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
    detractorsCount = result;
});

Survey.aggregate([
  { $group: {
    _id: { brandName: "$brandName", npsReason:"$npsReason" },
    count: { $sum: 1 }
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
      mergedData.push(_.extend({}, totalCount[i], promotersCount[i], detractorsCount[i]));
    }

    for(var j = 0; j < totalCount.length; j++)  {
      var index = mergedData[j];

      apiData.push({"brand": index._id, "NPS Score": (index.promoters/index.total * 100) - (index.detractors/index.total * 100) });
    }

    res.json({
      apiData,
      mergedData,
      npsReason
    });
  },

  // Survey.findOne({})
  // .populate('user')
  // .exec(function(err, surveys) {
  //   if (err) res.status(400).send(err);
  //   res.json(surveys);
  // });

  // Survey.aggregate([
  //   { $group: { _id: {$toUpper: "$brandName"}, total: { $avg: "$npsScore"}}}
  // ], function(err, result){
  //   if (err) next(err);
  //
  //   res.json(result);
  // });

  edit: function (req, res, next) {
    res.render('surveys/edit', {
      title: 'Edit a Survey'
    });
  },
  new: function(req, res) {
    res.render('surveys/take', {
      title: 'Add A Survey'
    });
  },
  create: function(req, res, next) {
    var survey = new Survey(req.body);
    survey.save(function(err) {
      if (err) return next(err);
      res.json(survey);
    });
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
