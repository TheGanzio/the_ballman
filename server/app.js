var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
// const getData = require('../src/runScans')

// getData()

// setInterval(getData, 1200000)

var app = express();

const PORT = process.env.PORT || 3030

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

const MozSchema = new mongoose.Schema({
    all: String,
    today: String
  })

const Ukraine = mongoose.model('Ukraine', PostsSchema)
const IT = mongoose.model('IT', PostsSchema)
const World = mongoose.model('World', PostsSchema)
const Korona = mongoose.model('Korona', PostsSchema)
const Moz = mongoose.model('Moz', MozSchema)
const Expert = mongoose.model('Expert', MozSchema)



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/ukr', (req, res) => {
  console.log('Api')
  Ukraine.find()
        .then((data) => {
            // console.log('Data: ', data);
            console.log('Ukraine')
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

app.use('/IT', (req, res) => {
    console.log('Api')
        IT.find()
          .then((data) => {
              //console.log('Data: ', data);
              console.log('IT')
              res.json(data);
          })
          .catch((error) => {
              console.log('error: ', error);
          });
  });

  app.use('/world', (req, res) => {
    console.log('Api')
        World.find()
          .then((data) => {
              //console.log('Data: ', data);
              console.log('World')
              res.json(data);
          })
          .catch((error) => {
              console.log('error: ', error);
          });
  });

  app.use('/korona', (req, res) => {
    console.log('Api')
        Korona.find()
          .then((data) => {
              //console.log('Data: ', data);
              console.log('Korona')
              res.json(data);
          })
          .catch((error) => {
              console.log('error: ', error);
          });
  });

  app.use('/moz', (req, res) => {
    console.log('MOZ: !')
        Moz.find()
          .then((data) => {
              //console.log('Data: ', data);
              console.log('Get')
              res.json(data);
          })
          .catch((error) => {
              console.log('error: ', error);
          });
  });

  app.use('/expert', (req, res) => {
    console.log('Expert: !')
        Expert.find()
          .then((data) => {
              //console.log('Data: ', data);
              console.log('Expert')
              res.json(data);
          })
          .catch((error) => {
              console.log('error: ', error);
          });
  });

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

module.exports = app;




