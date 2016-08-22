module.exports = function(app) {

var express = require('express'),
    router  = express.Router(),
    jwt = require('jsonwebtoken'),
    jwt_secret = 'supercalifragilisticexpialidocious';

var User = require('../models/user.server.model');
var userController = require('../controllers/user.server.controller');

//actual ROUTING, uses static page controller to render the static pages via specified routes.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/user/new', userController.new);
app.get('/users/index', userController.all);
app.get('/users/edit', userController.edit);
app.get('/users/dashboard', userController.dashboard);
app.get('/users/login', userController.login);

app.post('/users', userController.create);

app.post('/', function(req, res) {
  console.log(req.body);
  var input_user = req.body;

  User.findOne({ email: input_user.email }, function (err, db_user) {
    if(err) res.send(err);

    if(db_user) {
      db_user.auth( input_user.password, function(err, is_match_password) {
        if(err) return res.status(500).send(err);

        if(is_match_password) {
          var payload = {
            id: db_user.id,
            email: db_user.email
          };
          var expiryObj = {
            expiresIn: '3h'
          };
          var jwt_token = jwt.sign(payload, jwt_secret, expiryObj);
          
          return res.status(200).send(jwt_token);
        } else {
          return res.status(401).send({ message: 'login failed' });
        }
      });
    } else {
      return res.status(401).send({ message: 'user not found in database' });
    }
  });
  res.redirect('/surveys/take');
});

app.route('/api/users')
  .get(userController.index)
  .post(userController.create);

app.route('/api/users/:id')
  .get(userController.show)
  .put(userController.update)
  .delete(userController.destroy);

};
