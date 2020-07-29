const mongoose = require('mongoose');

//schema setup
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    author: {
        _id: {
            type: mongoose.Schema.Types.ObjectID,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type : mongoose.Schema.Types.ObjectID,
            ref: "Comment"
        }
    ]
});
module.exports = mongoose.model("Campground", campgroundSchema);