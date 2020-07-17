const express = require('express');
const router = express.Router({mergeParams: true});
const Comment = require('../models/comment');
const Campground = require('../models/campground')
const isLoggedIn = require('../public/javascripts/middleware/isLoggedIn')

/* NEW COMMENT FORM */
router.get('/new', isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render('comments/new', {title: 'New Comment', campground: campground});
        }
    })

});

/* POST NEW COMMENT */
router.post("/", isLoggedIn, function (req, res) {
    //lookup campground using ID
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    console.log(comment);
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
});

module.exports = router;