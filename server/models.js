const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  owner: String,
  memberIds: {
    guard1: String,
    guard2: String,
    forward1: String,
    forward2: String,
    center: String
  }
});


const Team = mongoose.model('Team', teamSchema);

module.exports = {Team}; 