const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const Car = require('../models/Car');
const House = require('../models/House');
const Category = require('../models/Category');
const User = require('../models/User');
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

exports.addFavCar = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID)
    await user.favoriler.push({_id:req.body.car_id})
    await user.save();
    res.status(200).redirect('/profile')
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

exports.getOtomobil = async (req, res) => {
  try {
    const cars = await Car.find({ tür:'otomobil'})
    
    res.status(200).render('otomobil', {
      cars,
      page_name: 'otomobil',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getSuv = async (req, res) => {
  try {
    const cars = await Car.find({ tür:'suv'})
    
    res.status(200).render('suv', {
      cars,
      page_name: 'suv',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
exports.getMotor = async (req, res) => {
  try {
    const cars = await Car.find({ tür:'motor'})
    
    res.status(200).render('motor', {
      cars,
      page_name: 'motor',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};


exports.getDenizAraci = async (req, res) => {
  try {
    const cars = await Car.find({ tür:'deniz aracı'})
    
    res.status(200).render('denizaraci', {
      cars,
      page_name: 'denizaraci',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getKonut = async (req, res) => {
  try {
    const houses = await House.find({ tür:'konut'})
    
    res.status(200).render('konut', {
      houses,
      page_name: 'konut',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getTarla = async (req, res) => {
  try {
    const houses = await House.find({ tür:'tarla'})
    
    res.status(200).render('tarla', {
      houses,
      page_name: 'tarla',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
exports.getIsyeri = async (req, res) => {
  try {
    const houses = await House.find({ tür:'iş yeri'})
    
    res.status(200).render('isyeri', {
      houses,
      page_name: 'is yeri',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};