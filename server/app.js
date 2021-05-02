var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

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

const Ukraine = mongoose.model('Ukraine', PostsSchema)
const IT = mongoose.model('IT', PostsSchema)
const World = mongoose.model('World', PostsSchema)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/ukr', (req, res) => {
  console.log('Api')
  Ukraine.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

app.use('/IT', (req, res) => {
    console.log('Api')
        IT.find()
          .then((data) => {
              console.log('Data: ', data);
              res.json(data);
          })
          .catch((error) => {
              console.log('error: ', daerrorta);
          });
  });

  app.use('/world', (req, res) => {
    console.log('Api')
        World.find()
          .then((data) => {
              console.log('Data: ', data);
              res.json(data);
          })
          .catch((error) => {
              console.log('error: ', daerrorta);
          });
  });

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

module.exports = app;




