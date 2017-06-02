const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  owner: String,
  memberIds: {
    guard1: Object,
    guard2: Object,
    forward1: Object,
    forward2: Object,
    center: Object
  }
});


const Team = mongoose.model('Team', teamSchema);

module.exports = {Team}; 