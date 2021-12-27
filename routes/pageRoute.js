const express = require('express')
const pageController = require('../controllers/pageController')
const advertController = require('../controllers/advertController')
const userController = require('../controllers/userController')
const houseController = require('../controllers/houseController')
const router = express.Router();

router.route('/car').get(advertController.getCar);
router.route('/house').get(houseController.getHouse);
router.route('/sign-in').get(pageController.getSignin);
router.route('/sign-up').get(pageController.getSignup);
router.route('/caradvert').get(pageController.getCaradvert);
router.route('/houseadvert').get(pageController.getHouseadvert);
router.route('/support').get(pageController.getSupport);
router.route('/addadvert').get(pageController.getaddAdvert);
router.route('/profile').get(userController.getUser);
router.route('/').get(advertController.getAllAdverts);



module.exports = router;
