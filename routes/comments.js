const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Campground = require('../models/campground')
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));

/* NEW COMMENT FORM */
router.get('/campgrounds/:id/comments/new', function (req, res) {
    console.log(req.params.id);
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render('comments/new', {title: 'New Comment', campground: campground});
        }
    })

});

/* POST NEW COMMENT */
router.post("/campgrounds/:id/comments", function (req, res) {
    console.log(req.body.comment);
    //lookup campground using ID
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(/*{
                text: req.body.text,
                author: req.body.author
            }*/req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
});

module.exports = router;