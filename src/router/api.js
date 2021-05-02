const express = require('express');
const router = express.Router();

import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://Nikolaiev:newsagregator@cluster0.qcstf.azure.mongodb.net/thebellman?retryWrites=true&w=majority', 
{
      useNewUrlParser: true, 
})
.then(() => console.log('MongoDB is connected'))
.catch((err) => console.log(err))

const PostsSchema = new mongoose.Schema({
      url: String,
      title: String,
      preDescription: String,
      description: String,
      authorName: String,
      image: String
})

const Posts = mongoose.model('Posts', PostsSchema)

let data = ''


router.get('/', (req, res) => {

    Posts.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

export default data