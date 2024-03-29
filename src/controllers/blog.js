const { validationResult } = require('express-validator')
const BlogPost = require('../models/blog')

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title
    const image = req.file.path
    const body = req.body.body

    const errors = validationResult(req)

    if (!error.isEmpty()) {
        const error = new Error('Input value tidak sesuai')
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    const Posting = new BlogPost({
        title: title,
        body: body,
        author: {
            uid: '1', name: 'ermanjuna'
        }
    })

    Posting.save()
        .then(result => {
            res.status(201).json({
                message: "Create Blog Post Success",
                data: result
            })
        })
        .catch(err => {
            console.log('err: ', err)
        })
}
