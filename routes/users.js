var express = require('express');
var router = express.Router();
const User = require('../models/user');
const passport = require("passport");




/* GET users listing. */
router.get('/', function (req, res, next) {
    User.find({}, function (err, users) {
        err ? console.log(err) : res.render('users/list', {
            title: 'User List',
            users: users
        });
    })
});

/*AUTH ROUTES*/

//register
router.get('/register', function (req, res, next) {
    res.render('users/register', {title: 'Signup'});
});

//signup
router.post('/register', function (req, res, next) {
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
           // req.flash("error", err.message);
            return res.render("users/register", {"error": err.message});
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/campgrounds');
        })
    });
});
//login form
router.get('/login', function (req, res) {
    res.render('users/login', {title: 'Login'});
});
//login
router.post('/login', passport.authenticate('local', {
        successRedirect: '/campgrounds',
        failureRedirect: '/users/login'
    }
), function (req, res) {

})
//logout
router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success', 'Logged out');
    res.redirect('/campgrounds');
});

module.exports = router;

