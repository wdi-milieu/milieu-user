var Survey = require('mongoose').model('Survey');

module.exports = {
  index: function(req, res, next) {
    Survey.find({}, function(err, surveys) {
      if (err) return next(err);
      res.json(surveys);
    });
  },
  new: function(req, res) {
    res.render('surveys/new', {
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
      }, 'name category',
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
