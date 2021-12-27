const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const Users = new Schema({
  email: String,
  password:String,
  name: String,
  surname: String,
  phone: String,
  adress:String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

Users.pre('save',function (next){
  const user = this;
  bcrypt.hash(user.password,10,(error,hash)=>{
    user.password=hash;
    next();
  })
})

const User = new mongoose.model('user', Users);

module.exports =User;
