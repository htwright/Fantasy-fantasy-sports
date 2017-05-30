const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  owner: {type: String, required: true},
  memberIds: {
    guard1: Number,
    guard2: Number,
    forward1: Number,
    forward2: Number,
    center: Number
  }
});


const Team = mongoose.model('Team', teamSchema);

module.exports = {Team};