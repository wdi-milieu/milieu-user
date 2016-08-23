module.exports = function(app) {

  var surveyController2 = require('../controllers/survey2.server.controller');

  //cross origin things
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/survey2/take', surveyController2.new);

}; //end of module exports
