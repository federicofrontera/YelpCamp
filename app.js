
require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const seedDB = require('./seeds');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const flash = require('connect-flash');
app.locals.moment = require('moment');
const passport = require('passport');


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//routers setup
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const campgroundsRouter = require('./routes/campgrounds');
const commentsRouter = require('./routes/comments');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//app config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(flash());



//auth configuration
app.use(require('express-session')({
    secret: 'michi y freya best cats LAS',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//middleware
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');

    next();
});



//router config
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/campgrounds', campgroundsRouter);
app.use('/campgrounds/:id/comments', commentsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


//mongoose config
mongoose.set('useFindAndModify', false);
//db connection
mongoose.connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

//reseed DB
seedDB();



module.exports = app;

