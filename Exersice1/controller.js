const mongoose = require('mongoose')
const consts = require('./consts')
const Post = require('./post')

const { MLAB_URL, DB_USER, DB_PASS } = consts

const url = MLAB_URL
const options = {
    useNewUrlParser: true, // For deprecation warnings
    useCreateIndex: true, // For deprecation warnings
    user: DB_USER,
    pass: DB_PASS
}

module.exports = {
    getAllPosts(req, res, next) {
        mongoose
        .connect(url, options)
        .then(async () => {
            // Query goes here
            const result = await Post.find({}).sort({ id: +1 })
            if (result) res.json(result)
            else res.status(404).send('not found')
        })
        .catch(err => {
            console.error('some error occurred', err)
            res.status(500).send(err.message)
        })
    },

    getPost(req, res, next) {
        mongoose
        .connect(url, options)
        .then(async () => {
            const {id = null} = req.params
            // Query goes here
            const result = await Post.find({id})

            if (result) res.json(result)
            else res.status(404).send('not found')
        })
        .catch(err => {
            console.error('some error occurred', err)
            res.status(500).send(err.message)
        })
    },

    editPost(req, res, next) {
        mongoose
        .connect(url, options)
        .then(async () => {
            const {id = null} = req.params
            const {Age = null,  IDF = null } = req.body;
            // Query goes here
            const result = await Post.updateOne({id}, {Age, IDF})

            if (result) res.json(result)
            else res.status(404).send('not found')
        })
        .catch(err => {
            console.error('some error occurred', err)
            res.status(500).send(err.message)
        })
    },

    addPost(req, res, next) {
        mongoose
        .connect(url, options)
        .then(async () => {
            const {
                id = null,
                Age = null,
                Name = null,
                Sport = null,
                IDF = null
            } = req.body
            // Query goes here

            const post = new Post({id, Age, Name, Sport, IDF})
            const result = await post.save()

            if (result) res.json(result)
            else res.status(404).send('not found')
        })
        .catch(err => {
            console.error('some error occurred', err)
            res.status(500).send(err.message)
        })
    },
   
    removePost(req, res, next) {
        mongoose
        .connect(url, options)
        .then(async () => {
            const { id = null, Name=null } = req.body
            // Query goes here

            const result = await Post.deleteOne({id, Name})

            if (result) res.json(result)
            else res.status(404).send('not found')
        })
        .catch(err => {
            console.error('some error occurred', err)
            res.status(500).send(err.message)
        })
    }
}