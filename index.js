const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')

const app = express();
const blogRoutes = require('./src/routes/blog')
const authRoutes = require('./src/routes/auth')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + "-" + "file.originalname")
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

app.use(bodyParser.json()) //type yang diterima adalah json
app.use('/images', express.static(path.join(__dirname,'images')))
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))

// app.use((req,res,next)={
//     res.setHeader('Access-Control-Allow-Origin','*')
//     res.setHeader('Access-Control-Allow-Method','GET,POST,PUT,PATCH.DELETE,OPTIONS')
//     res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization')
//     next()
// })
app.use('/v1/auth', authRoutes)
app.use('/v1/blog', blogRoutes);

mongoose.connect('mongodb+srv://okta:5AB223tZTRxzHO8M@cluster0.5wf28.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        app.listen(4000, () => console.log('connection success'));
    })
    .catch(err => console.log(err))
