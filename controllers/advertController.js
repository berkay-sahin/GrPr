const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const Car = require('../models/Car');
const House = require('../models/House');
const Category = require('../models/Category')
//const { nextTick } = require('process');

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).render('index', {
      cars,
      page_name: 'cars',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
exports.getCar = async (req, res) => {
  try {
    const car = await Car.findOne({slug: req.params.slug})
    
    res.status(200).render('car', {
      car,
      page_name: 'car',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
exports.getAllHouses = async (req, res) => {
  try {
    const houses = await House.find();

    res.status(200).render('index', {
      houses,
      page_name: 'houses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
/*
exports.getHouse = async (req, res) => {
  try {
    const house = await House.findOne({slug: req.params.slug})

    res.status(200).render('house', {
      house,
      page_name: 'house',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
}; */

exports.getAllAdverts= async (req, res) => {
  try {
    const houses = await House.find();
    const cars = await Car.find(); 
    res.status(200).render('index', {
      houses,
      cars,
      page_name: 'houses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

 /*
exports.createCarAdvert = async (req, res) => {
   const uploadDir = './public/uploads';
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  let uploadedImg = req.files.ilanfoto;
  let uploadPath = __dirname + '/public/uploads/' + uploadedImg.name;

  uploadedImg.mv(uploadPath, async () => {
    await Car.create({
      ...req.body,
      ilanfoto: './uploads/' + uploadedImg.name,
    });
    res.redirect('/');
  });
 
};

exports.createHouseAdvert = async (req, res) => {
  const uploadDir = './public/uploads';
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  let uploadedImg = req.files.evfoto;
  let uploadPath = __dirname + '/public/uploads/' + uploadedImg.name;

  uploadedImg.mv(uploadPath, async () => {
    await House.create({
      ...req.body,
      evfoto: './uploads/' + uploadedImg.name,
    });
  });
  res.redirect('/')
}; */
