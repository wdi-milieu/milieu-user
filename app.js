// var express = require('./config/express');
// var mongoose = require('./config/mongoose');

var express = require('express');
var mongoose = require('mongoose');

var app = express();
var db = mongoose();

app.set('port', (process.env.PORT || 9000));
app.listen(app.get('port'), function() {
  console.log ('Milieu: user-side running on localhost port: ', app.get('port'));
});

module.exports = app;
