// require needed modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var passport = require('passport');
var sessions = require('express-session');

// declare app variables
var app = express();

// set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get('/', function(req, res) {
  res.send('this is the root page');
});

// listen on port 3000
app.listen(3000);
