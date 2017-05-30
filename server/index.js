const path = require('path');
const express = require('express');
const databaseUrl = require('./config');
const mongoose = require('mongoose');
const app = express();
const Team = require('./models');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/api', (req, res) => {
  Team
    .find()
    .then(result => res.json(result))
    .catch(err => console.error(err));
});

app.post('/teams', (req, res) => {
  Team
    .create({
      owner: req.params.owner,
      team: req.params.team
    })
    .then(()=> console.log('created!'))
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
    mongoose.connect(databaseUrl, err => {
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
