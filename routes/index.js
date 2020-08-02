var express = require('express');
var router = express.Router();
const Campground = require('../models/campground');

/* GET home page. */
router.get('/', function(req, res, next) {
/*  Campground.find({}, function (err, campgrounds) {
    if(err){
      console.log(err);
    }
    else{
      res.render('index', { campgrounds: campgrounds });
    }
  })*/
  res.render('index');
});

module.exports = router;
