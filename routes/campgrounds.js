const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const isLoggedIn = require('../public/javascripts/middleware/isLoggedIn')


/* GET campgrounds page. */
router.get('/', function (req, res, next) {
    Campground.find({}, function (err, campgrounds) {
        err ? console.log(err) : res.render('campgrounds/campgrounds', {
            title: 'Campgrounds',
            campgrounds: campgrounds
        });
    })
});


/* GET new campground form. */
router.get('/new', isLoggedIn, function (req, res, next) {
    res.render('campgrounds/new', {title: 'New Campground'});
});


/* POST new campground. */
router.post('/', isLoggedIn, function (req, res, next) {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = {name: name, image: image, description: desc};

    Campground.create(newCampground, function (err, savedCampground) {
        err ? console.log(err) : res.redirect('/campgrounds');
    });
});

/* SHOW more info about a campground */
router.get('/:id', function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds/show', {title: campground.name, campground: campground});
        }
    })
})

module.exports = router;