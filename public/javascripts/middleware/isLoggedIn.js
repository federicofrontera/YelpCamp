//auth middleware
module.exports = function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error', 'Must be logged in to perform that action')
        res.redirect('/users/login');
    }
}