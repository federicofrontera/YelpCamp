const express = require('express');
const router = express.Router({mergeParams: true});
const Comment = require('../models/comment');
const Campground = require('../models/campground');
const isLoggedIn = require('../public/javascripts/middleware/isLoggedIn');
const checkCommentOwnership = require('../public/javascripts/middleware/checkCommentOwnership');

/* NEW COMMENT FORM */
router.get('/new', isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err || !campground) {
            req.flash('error', 'Campground not found');
            res.redirect('back');
        } else {
            res.render('comments/new', {title: 'New Comment', campground: campground});
        }
    });
});

/* POST NEW COMMENT */
router.post('/', isLoggedIn, function (req, res) {
    //lookup campground using ID
    Campground.findById(req.params.id, function (err, campground) {
        if (err || !campground) {
            req.flash('error', 'Campground not found');
            res.redirect('/campgrounds');
        } else {
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    comment.author = req.user;
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    req.flash('success', 'New comment added');
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
});


/*EDIT comment form route*/
router.get('/:comment_id/edit', checkCommentOwnership, function (req, res) {
    Comment.findById(req.params.comment_id, function (err, foundComment) {
        if (err) {
            res.redirect('back');
        } else {
            res.render('comments/edit', {campground_id: req.params.id, comment: foundComment});
        }
    });
});

/*UPDATE comment route*/
router.put('/:comment_id', checkCommentOwnership, function (req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function (err) {
        if (err) {
            console.log(err);
            res.redirect('back');
        } else {
            res.redirect('/campgrounds/' + req.params.id);
        }
    });
});

/*DESTROY comment route*/
router.delete('/:comment_id', checkCommentOwnership, function (req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function (err) {
        if (err) {
            res.redirect('/back');
        } else {
            req.flash('success', 'Comment deleted');
            res.redirect('/campgrounds/' + req.params.id);
        }

    });
});

module.exports = router;