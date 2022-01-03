const mongoose = require('mongoose');
const { default: slugify } = require('slugify');
const Schema = mongoose.Schema;
const Houses = new Schema({

  ilanbaslik: String,
  ilanfoto: String,
  evaciklama: String,
  ilansahibi: String,
  phone:String,
  tür: String,
  boyut: String,
  odasayisi: Number,
  katsayisi: String,
  sehir: String,
  mahalle:String,
  esya: String,
  aidat: Number,
  binayasi: Number,
  balkonsayisi: Number,
  aidat: Number,
  cephe: String,
  bahce: String,
  isinma: String,
  kimden: String,
  

  dateCreated: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});

Houses.pre('validate', function (next) {
  this.slug = slugify(this.ilanbaslik, {
    lower: true,
    strict: true,
  });
  next();
}); 

const House = new mongoose.model('house', Houses);

module.exports = House;
