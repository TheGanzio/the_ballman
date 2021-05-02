import express from 'express'
import path from 'path'
import mongoose from 'mongoose'

const app = express();
const PORT = process.env.PORT || 3001; // Step 1

// import routes from './routes/api'

// Step 2
mongoose.connect('mongodb+srv://Nikolaiev:newsagregator@cluster0.qcstf.azure.mongodb.net/thebellman?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

const PostsSchema = new mongoose.Schema({
    url: String,
    title: String,
    preDescription: String,
    description: String,
    authorName: String,
    image: String
})

const Posts = mongoose.model('Posts', PostsSchema)



// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3


// HTTP request logger

app.use('/api', (req, res) => {
    Posts.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


app.listen(PORT, console.log(`Server is starting at ${PORT}`));