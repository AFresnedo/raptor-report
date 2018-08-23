var express = require('express');

var router = express.Router();

router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.post('/login', function(req, res) {
  res.send('login post route');
});

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post('/signup', function(req, res) {
  res.send('temp post signup');
});

router.get('/logout', function(req, res) {
  res.send('this is the logout response');
});

module.exports = router;
