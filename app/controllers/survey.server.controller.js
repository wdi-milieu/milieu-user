var Survey = require('mongoose').model('Survey');

var totalCount, promotersCount, detractorsCount, npsReason;

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

  // { $group: { _id: { brandName: "$brandName", npsReason:"$npsReason", }, score: { $sum: "$npsReason" }, count: { $sum: 1 }}}

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

    res.json([
      {npsReason},
      {totalCount},
      {promotersCount},
      {detractorsCount}
    ]);
  },

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
