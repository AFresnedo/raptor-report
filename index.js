// try to load variables as close to the top as you can
require('dotenv').config() // not assigned because not directly using in any way
// above line looks in .env file and loads any variables it finds to this scope
// require needed modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var flash = require('connect-flash');
var passport = require('./config/passportConfig');
var session = require('express-session');

// declare app variables
var app = express();

// set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
// give the session the secret key but have a key required so nobody else
// can see session data (so just the session data has it)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
// flash and passport depend on session
app.use(flash());
app.use(passport.initialize()); // initialize is the config logic?
app.use(passport.session()); // obviously for sessions/passport work

// custom middleware
app.use(function(req, res, next) {
  // is locals the custom place to put stuff?
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  next();
});

// include controllers (alphabetical order if nothing else)
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));

// routes
app.get('/', function(req, res) {
  res.render('home');
});

// listen on port 3000
app.listen(3000);
