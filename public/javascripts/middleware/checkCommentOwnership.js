const Campground = require('../../../models/comment');

module.exports = function checkCampgroundOwnership(req, res, next) {
    if (req.isAuthenticated()) {
        Campground.findById(req.params.comment_id, function (err, comment) {
            if (err) {
                console.log(err);
                res.redirect('back');
            } else if (comment.author._id.equals(req.user._id)) {
                next()
            } else {
                req.flash('error', 'Permission denied');
                res.redirect('back');
            }
        })
    } else {
        req.flash('error', 'Must be logged in to perform that action');
        res.redirect('/users/login');
    }
}
