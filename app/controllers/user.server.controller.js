var User = require('mongoose').model('User');
var demographics_arr = require('../../public/scripts/demographics');


module.exports = {
  login: function(req, res, next) {
    res.render('users/login', {
      title: 'LOG IN'
    });
  },
  dashboard: function(req, res, next) {
    res.render('users/dashboard', {
      title: 'DASH'
    });

  },
  all: function(req, res, next) {
    res.render('users/index', {
      title: 'All Users'
    });
  },
  edit: function(req, res, next) {
    res.render('users/edit', {
      title: 'Edit Details'
    });
  },
  index: function(req, res, next) {
    User.find({})
    .exec(function(err, users) {
      if (err) res.status(400).send(err);
      res.json(users);
    });
  },
  new: function(req, res) {
    res.render('users/new', {
      title: 'SIGN UP',
      demographics: demographics_arr
    });
  },
  create: function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
      if (err) return next(err);
      res.redirect('/surveys/take');
    });
  },
  show: function(req, res) {
    res.json(req.user);
  },
  update: function(req, res, next) {
    User.findbyIdAndUpdate(req.user.id, req.body, function(err, user) {
      if (err) {
        return next(err);
      } else {
        res.json(user);
      }
    });
  },
  destroy: function(req, res, next) {
    req.user.remove(function(err) {
      if(err) {
        return next(err);
      } else {
        res.json(req.user);
      }
    });
  },
  user_by_id: function(req, res, next, id) {
    User.findOne({
        _id: id
      }, 'firstname, lastname',
      function(err, user) {
        if (err) {
          return next(err);
        } else {
          req.user = user;
          next();
        }
      });
}
};
