var Survey = require('mongoose').model('Survey');
var _ = require('underscore');

var totalCount, promotersCount, detractorsCount, mergedData, npsReason;

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
    // Survey.findOne({})
    // .populate('user')
    // .exec(function(err, surveys) {
    //   if (err) res.status(400).send(err);
    //   res.json(surveys);
    // });
    mergedData = [
      _.extend({}, totalCount[0], promotersCount[0], detractorsCount[0]),
      _.extend({}, totalCount[1], promotersCount[1], detractorsCount[1]),
      _.extend({}, totalCount[2], promotersCount[2], detractorsCount[2]),
      _.extend({}, totalCount[3], promotersCount[3], detractorsCount[3]),
      _.extend({}, totalCount[4], promotersCount[4], detractorsCount[4]),
      _.extend({}, totalCount[5], promotersCount[5], detractorsCount[5]),
      _.extend({}, totalCount[6], promotersCount[6], detractorsCount[6]),
      _.extend({}, totalCount[7], promotersCount[7], detractorsCount[7]),
      _.extend({}, totalCount[8], promotersCount[8], detractorsCount[8]),
    ];


    res.json([
      mergedData,
      npsReason
    ]);
  },


  // {npsReason},
  // { mergeCount },
  // { totalCount },
  // { promotersCount },
  // { detractorsCount }

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
