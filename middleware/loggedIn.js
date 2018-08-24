module.exports = function(req, res, next) {
  if (!req.user) {
    req.flash('error', 'You do not have access to that page.');
    res.redirect('/auth/login');
  }
  else {
    next();
  }
}
