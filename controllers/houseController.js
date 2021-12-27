const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const House = require('../models/House');


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