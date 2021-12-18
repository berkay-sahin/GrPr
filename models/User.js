const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Users = new Schema({
  email: String,
  password:Array,
  password2:Array,
  name: String,
  surname: String,
  phone: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const User = new mongoose.model('user', Users);

module.exports =User;
