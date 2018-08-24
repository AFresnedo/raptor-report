var express = require('express');

var router = express.Router();

var loggedIn = require('../middleware/loggedIn');

// uses loggedIn middleware
router.get('/', loggedIn, function(req, res) {
  res.render('profile/landing');
});

module.exports = router;
