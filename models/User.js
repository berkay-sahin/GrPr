const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const Users = new Schema({
  email: String,
  password: String,
  name: String,
  surname: String,
  phone: String,
  adress: String,
  favoriler: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      ref: 'House',
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

Users.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});
const User = new mongoose.model('user', Users);
module.exports = User;


