const path = require('path');
const express = require('express');
const {DATABASE_URL} = require('./config');
const mongoose = require('mongoose');
const app = express();
const {Team} = require('./models');
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());


app.get('/api/teams', (req, res) => {
  Team
    .find()
    .then(result => res.status(200).json(result))
    .catch(err => console.error(err));
});

app.post('/api/teams', (req, res) => {
  console.log(req.body);
  Team
    .create({
      owner: req.body.owner,
      memberIds: req.body.players
    })
    .then((result)=> res.status(201).json(result))
    .catch(err => console.error(err));
});

app.put('/api/teams', (req, res) => {
  const toUpdate = {};
  const updateableFields = ['owner', 'memberIds'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  Team
    .findByIdAndUpdate(req.body.id, {$set: toUpdate})
    .then(result => res.status(204).end())
    .catch(err=>console.error(err));

});

app.delete('/api/teams', (req, res) => {
  Team
    .findByIdAndRemove(req.body.id)
    .then(() => res.status(204).end())
    .catch(err => console.error(err)); 
});

// app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
// app.get(/^(?!\/api(\/|$))/, (req, res) => {
//   const index = path.resolve(__dirname, '../client/build', 'index.html');
//   res.sendFile(index);
// });

let server;
function runServer(port=3001) {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
