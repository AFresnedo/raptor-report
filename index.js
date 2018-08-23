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

// include controllers (alphabetical order if nothing else)
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));

// routes
app.get('/', function(req, res) {
  res.render('home');
});

// listen on port 3000
app.listen(3000);
