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


/* POST new campground . */
router.post('/', isLoggedIn, function (req, res, next) {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let author = {
        id: req.user._id,
        username: req.user.username
    }
    let newCampground = {name: name, image: image, description: desc, author: author};
    Campground.create(newCampground, function (err, savedCampground) {
        if(err){
            console.log(err);
        }
        else{
            console.log(savedCampground)
            res.redirect('/campgrounds');
        }
    });
});

/* SHOW campground route */
router.get('/:id', function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds/show', {title: campground.name, campground: campground});
        }
    })
})

/*EDIT campground route*/
router.get('/:id/edit', function (req, res) {
    Campground.findById(req.params.id,function (err, campground) {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds');
        } else {
            res.render('campgrounds/edit', {title: campground.name + " edit", campground: campground});
        }
    })
})

/*UPDATE campground route*/
router.put('/:id', function (req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
        if(err){
            console.log(err);
            res.redirect('/campgrounds');
        }
        else{
            res.redirect('/campgrounds/' + req.params.id);
        }
    })
})
module.exports = router;