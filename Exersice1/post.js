const mongoose = require('mongoose')

    const schema = {
        id: { type: Number, required: true},
        Age: { type: Number, required: true },
        Name: { type: String, required:true },
        Sport: { type: String, required:true },
        IDF:{
            Personal_number: { type: String, required: true },
            Rank: { type: String, required:true },
            Unit: { type: String, required:true },
        }
    }

    const post_schema = new mongoose.Schema(schema)
    const Post = mongoose.model('Post', post_schema)
    
    module.exports = Post
