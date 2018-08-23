var express = require('express');

var db = require('../models');

var router = express.Router();


router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.post('/login', function(req, res) {
  console.log(req.body);
  res.send('login post route');
});

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post('/signup', function(req, res) {
  console.log(req.body);
  // defaults is important in following code, adds the input to db
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: req.body
  }).spread(function(user, wasCreated) {
    if (wasCreated) {
      // TODO automatically log user in
      res.redirect('/profile');
    }
    else {
      // TODO give user already-created message
      res.redirect('/auth/login');
    }
  }).catch(function(err) {
    console.log(err);
    res.send('error signing up');
  });
});

router.get('/logout', function(req, res) {
  res.send('this is the logout response');
});

module.exports = router;
