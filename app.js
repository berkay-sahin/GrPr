const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const fs = require('fs');
const fileUpload = require('express-fileupload');
const { userInfo } = require('os');
const pageRoute = require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');
const advertRoute = require('./routes/advertRoute');
const categoryRoute = require('./routes/categoryRoute');
const houseRoute = require('./routes/houseRouter');
const Car = require('./models/Car');
const House = require('./models/House');
const User = require('./models/User');

//GLOBAL VARİABLES
global.userIN = null;

//MIDDLEWARES

app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static('public'));
app.use(
  session({
    secret: 'my_keyboard_cat', // Buradaki texti değiştireceğiz.
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/pcat-test-db' })
  })
);
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/', pageRoute);
app.set('views', './views/gp1');
app.set('view engine', 'ejs');
app.use('/users', userRoute);
app.use('/addadvert', advertRoute);
app.use('/car', advertRoute);
app.use('/house', houseRoute);
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

//POST PARTS
//ARABA VERİSİ EKLEME

app.post('/addcar', async (req, res) => {
  const uploadDir = 'public/uploads';
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  let uploadedImg = req.files.ilanfoto;
  let uploadPath = __dirname + '/public/uploads/' + uploadedImg.name;
  uploadedImg.mv(uploadPath, async () => {
    await Car.create({
      ...req.body,
      ilanfoto: '/uploads/' + uploadedImg.name,
    });
    res.redirect('/');
  });
});

//EV VERİSİ EKLEME

app.post('/addhouse', async (req, res) => {
  const uploadDir = 'public/uploads';
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  let uploadedImg = req.files.evfoto;
  let uploadPath = __dirname + '/public/uploads/' + uploadedImg.name;
  uploadedImg.mv(uploadPath, async () => {
    await House.create({
      ...req.body,
      evfoto: '/uploads/' + uploadedImg.name,
    });
    res.redirect('/');
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`sunucu ${PORT} başlatıldı`);
});
