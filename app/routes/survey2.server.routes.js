module.exports = function(app) {

  var Survey = require('../models/survey2.server.model');
  var surveyController2 = require('../controllers/survey2.server.controller');

  //cross origin things
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/survey2/take', surveyController2.new);

  app.post('/survey2', surveyController2.create);

}; //end of module exports
