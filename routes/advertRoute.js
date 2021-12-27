const express = require('express')
const advertController = require('../controllers/advertController');
const categoryController = require('../controllers/categoryController');
const userController = require('../controllers/userController');
const router = express.Router();
/*
router.route('/addcar').post(advertController.createCarAdvert);
router.route('/addhouse').post(advertController.createHouseAdvert); */

router.route('/:slug').get(advertController.getCar);
router.route('/users/sign-out').get(userController.logoutUser);
module.exports = router;
