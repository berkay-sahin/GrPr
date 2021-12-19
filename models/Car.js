const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Cars = new Schema({

  ilanbaslik: String,
  ilanfoto: {
    data: Buffer,
    contentType: String,
  },
  ilanaciklama: String,
  ilansahibi: String,
  marka: String,
  yıl: String,
  km: String,
  bg: String,
  tür: String,
  model: String,
  vites: String,
  renk: String,
  motorhacmi: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Car = new mongoose.model('car', Cars);

module.exports = Car;
