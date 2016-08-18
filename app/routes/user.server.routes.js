module.exports = function(app) {

var User = require('../models/user.server.model');
var userController = require('../controllers/user.server.controller');

//actual ROUTING, uses static page controller to render the static pages via specified routes.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/user/new', userController.new);

app.route('/users')
  .get(userController.index)
  .post(userController.create);

app.route('/users/:id')
  .get(userController.show)
  .put(userController.update)
  .delete(userController.destroy);

};
