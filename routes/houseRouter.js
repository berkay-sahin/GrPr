const express = require('express')
const advertController = require('../controllers/advertController');
const userController = require('../controllers/userController');
const houseController = require('../controllers/houseController');
const router = express.Router();

router.route('/:slug').get(houseController.getHouse);
router.route('/users/sign-out').get(userController.logoutUser);
module.exports = router;
