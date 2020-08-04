const mongoose = require('mongoose');
const Comment = require('./comment');

//schema setup
const campgroundSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    coordinates: Array,
    author: {
        _id: {
            type: mongoose.Schema.Types.ObjectID,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: "Comment"
        }
    ]
});

//pre hook to remove all comments when removing campground
campgroundSchema.pre('remove', async function (next) {
        try {
        await Comment.deleteMany({
            _id: {
                $in: this.comments
            }
        });
        return next();
    } catch (err) {
        return next(err);
    }
});
module.exports = mongoose.model("Campground", campgroundSchema);