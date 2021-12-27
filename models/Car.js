const mongoose = require('mongoose');
const { default: slugify } = require('slugify');
const slug = require('slugify');

const Schema = mongoose.Schema;
const Cars = new Schema({
  ilanbaslik: String,
  ilanfoto: Array,
  ilanaciklama: String,
  ilansahibi: String,
  telefon: String,
  marka: String,
  yıl: Number,
  km: Number,
  bg: Number,
  tür: String,
  model: String,
  vites: String,
  renk: String,
  motorhacmi: Number,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
  /*category:{
    type:mongoose.Schema.Types.String,
    ref:'Category'
  }*/
}); 

Cars.pre('validate', function (next) {
  this.slug = slugify(this.ilanbaslik, {
    lower: true,
    strict: true,
  });
  next();
}); 

const Car = new mongoose.model('car', Cars);

module.exports = Car;
