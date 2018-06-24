const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  first_name: String,
  last_name: String,
  name: String,
  profile_photo: String,
  email: String,
  password: String
}, { collection : 'users' });

module.exports = mongoose.model('User', userSchema);