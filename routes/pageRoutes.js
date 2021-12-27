/*
const express = require('express');
const User = require('../models/User');
const Car = require('../models/Car');
const House = require('../models/House');
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const router = express.Router();


router.get('/', async (req, res) => {
  const adverts = await Car.find({});
  res.render('index', {
    adverts,
  });
});

router.get('/car', (req, res) => {
  res.render('car');
}); 
router.get('/house', (req, res) => {
  res.render('house');
});
router.get('/car/:id', async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.render('car', {
    car,
  });
});

router.get('/profile', async (req, res) => {
  const usr = await User.find({});
  res.render('profile', {
    usr,
  });
});

router.get('/addadvert', (req, res) => {
  res.render('advert');
});

router.get('/sign-in', (req, res) => {
  res.render('sign-in');
});
router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});
router.get('/caradvert', (req, res) => {
  res.render('caradvert');
});
router.get('/houseadvert', (req, res) => {
  res.render('houseadvert');
});
router.get('/support', (req, res) => {
  res.render('support');
});
router.post('/user', async (req, res) => {
  await User.create(req.body);
  res.redirect('/profile');
});



module.exports = router;
*/