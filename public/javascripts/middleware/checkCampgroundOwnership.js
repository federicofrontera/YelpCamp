const Campground = require('../../../models/campground');

module.exports = function checkCommentOwnership(req, res, next) {
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function (err, campground) {
            if (err || !campground) {
                req.flash('error', 'Campground not found')
                res.redirect('back');
            } else if (campground.author._id.equals(req.user._id)) {
                next()
            } else {
                req.flash('error', 'Permission denied')
                res.redirect('back');
            }
        })
    } else {
        req.flash('error', 'Must be logged in to perform that action')
        res.redirect('/users/login');
    }
}
