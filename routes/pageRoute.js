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
router.route('/caradvert').get(userController.getUserCarAdv);
router.route('/houseadvert').get(userController.getUserHouseAdv);
router.route('/support').get(pageController.getSupport);
router.route('/addadvert').get(pageController.getaddAdvert);
router.route('/profile').get(userController.getUser);
router.route('/').get(advertController.getAllAdverts);
router.route('/otomobil').get(advertController.getOtomobil);
router.route('/suv').get(advertController.getSuv);
router.route('/motor').get(advertController.getMotor);
router.route('/denizaraci').get(advertController.getDenizAraci);
router.route('/konut').get(advertController.getKonut);
router.route('/tarla').get(advertController.getTarla);
router.route('/isyeri').get(advertController.getIsyeri);



module.exports = router;
