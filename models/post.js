const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: String,
    contents: Array,
    image: String,
    releaseDate: Date,
    
})

module.exports = mongoose.model('Post', PostSchema)