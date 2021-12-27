const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router();
router.route('/sign-up').post(userController.createUser);
router.route('/sign-in').post(userController.loginUser);
router.route('/sign-out').get(userController.logoutUser);
module.exports = router;
