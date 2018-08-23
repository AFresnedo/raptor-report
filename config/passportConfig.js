var passport = require('passport');
// passport login methods are called strategies
var passportLocalStrategy = require('passport-local').Strategy;

var db = require('../models');

// provide serialize/deserialize functions (passport + session functionality)
passport.serializeUser(function(user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function(id, callback) {
  db.user.findById(id).then(function(user) {
    callback(null, user);
  }).catch(function(err) {
    callback(err, null);
  });
});

// login code
passport.use(new passportLocalStrategy({
  // this gets the "thing" to work on
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, done) {
  // this does the work on the thing
  db.user.findOne({
    where: { email: email }
  }).then(function(foundUser) {
    // !foundUser first because if it's null you can't do password check
    if(!foundUser || !foundUser.isValidPassword(password)) {
      // first arg is err, second is "the thing" in this case null none found
      done('invalid user or password', null);
    }
    else {
      done(null, foundUser);
    }
  }).catch(function(err) {
    done(err, null);
  })
}));

module.exports = passport;
