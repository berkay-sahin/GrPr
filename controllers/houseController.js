const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const House = require('../models/House');
const User = require('../models/User');

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
  }; 

  exports.addFavHouse = async (req, res) => {
    try {
      const user = await User.findById(req.session.userID)
      await user.favoriler.push({_id:req.body.house_id})
      await user.save();
      res.status(200).redirect('/profile')
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        error,
      });
    }
  };