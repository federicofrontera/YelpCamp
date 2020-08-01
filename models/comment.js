const mongoose = require('mongoose');

//schema setup
const commentSchema = new mongoose.Schema({
    text: String,
    author: {
        _id: {
            type: mongoose.Schema.Types.ObjectID,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Comment", commentSchema);