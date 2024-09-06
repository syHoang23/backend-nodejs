const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {type: String,require:[true,'Post must has been content'],trim:true},
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;