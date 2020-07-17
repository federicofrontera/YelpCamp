var express = require('express');
var router = express.Router();
const User = require('../models/user');
const passport = require("passport");
const LocalStrategy = require('passport-local');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
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
            console.log(err);
            return res.render('users/register', {title: 'Signup'});
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
    res.redirect('/campgrounds');
});

module.exports = router;

