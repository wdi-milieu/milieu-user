var Survey = require('mongoose').model('Survey');
var brands_arr = require('../../public/scripts/brands');
var survey_arr = require('../../public/scripts/survey');

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
    Survey.find({}, function(err, surveys) {
      if (err) return next(err);
      res.json(surveys);
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
