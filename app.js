const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');
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
const { captureRejections } = require('connect-mongo');

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



// POST CAR

app.post('/addcar', async(req, res) => {
  const car = new Car({
   ...req.body
  });

  const uploadDir = "public/uploads";

  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

  const images = [];

  req.files.ilanfoto = !req.files.ilanfoto.length
    ? [req.files.ilanfoto]
    : req.files.ilanfoto;
  for (let i = 0; i < req.files.ilanfoto.length; i++) {
    const ilanfoto = req.files.ilanfoto[i];
    let uploadPath = __dirname + "/public/uploads/" + ilanfoto.name;

    await new Promise((resolve) => {
      ilanfoto.mv(uploadPath, (err) => {
        if (err) throw err;
        console.log(ilanfoto);
        if (!err) images.push(`/uploads/${ilanfoto.name}`);
        resolve(true);
      });
    });
  }
  car.ilanfoto = images;
  await car.save();
  res.redirect('/');
});

//POST HOUSE

app.post('/addhouse', async(req, res) => {
  const house = new House({
   ...req.body
  });

  const uploadDir = "public/uploads";

  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

  const images = [];

  req.files.ilanfoto = !req.files.ilanfoto.length
    ? [req.files.ilanfoto]
    : req.files.ilanfoto;
  for (let i = 0; i < req.files.ilanfoto.length; i++) {
    const ilanfoto = req.files.ilanfoto[i];
    let uploadPath = __dirname + "/public/uploads/" + ilanfoto.name;

    await new Promise((resolve) => {
      ilanfoto.mv(uploadPath, (err) => {
        if (err) throw err;
        console.log(ilanfoto);
        if (!err) images.push(`/uploads/${ilanfoto.name}`);
        resolve(true);
      });
    });
  }
  house.ilanfoto = images;
  await house.save();
  res.redirect('/');
});

  //POST PARTS
//ARABA VERİSİ EKLEME
/*
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
}); */

//MULTER BAŞLANGIÇ
/*
var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, '/public/uploads/');
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, file.originalname)
  }
});

var upload = multer({storage: storage}) 
*/


// MULTER BİTİŞ

//EV VERİSİ EKLEME
/*
app.post('/addhouse', async (req, res) => {
  const uploadDir = 'public/uploads';
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  let uploadedImg = req.files.ilanfoto;
  let uploadPath = __dirname + '/public/uploads/' + uploadedImg.name;
  uploadedImg.mv(uploadPath, async () => {
    await House.create({
      ...req.body,
      ilanfoto: '/uploads/' + uploadedImg.name,
    });
    res.redirect('/');
  });
});*/



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`sunucu ${PORT} başlatıldı`);
});
