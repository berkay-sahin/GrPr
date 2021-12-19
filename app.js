const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const http = require('http');
const path = require('path');
const app = express();
const User = require('./models/User');
const Car = require('./models/Car');

const { userInfo } = require('os');

app.use(express.static('public'));
app.set('views', './views/gp1');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// CONNECT DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const deneme = (req, res, next) => {
  console.log('zorroror');
  next();
};
app.use(deneme);

app.get('/', async (req, res) => {
  const adverts = await Car.find({})
  res.render('index',{
    adverts,
  });
});
app.get('/car', (req, res) => {
  res.render('car');
});
app.get('/house', (req, res) => {
  res.render('house');
});


app.get('/profile', async (req, res) => {
  const usr = await User.find({});
  res.render('profile', {
    usr,
  });
});

app.get('/addadvert', (req, res) => {
  res.render('advert');
});

app.get('/sign-in', (req, res) => {
  res.render('sign-in');
});
app.get('/sign-up', (req, res) => {
  res.render('sign-up');
});
app.get('/caradvert', (req, res) => {
  res.render('caradvert');
});
app.get('/houseadvert', (req, res) => {
  res.render('houseadvert');
});
app.get('/support', (req, res) => {
  res.render('support');
});
app.post('/user', async (req, res) => {
  await User.create(req.body);
  res.redirect('/profile');
});
app.post('/addcar', async (req, res) => {
  await Car.create(req.body);
  res.redirect('/');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`sunucu ${PORT} başlatıldı`);
});
