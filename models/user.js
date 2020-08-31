const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

//schema setup
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);