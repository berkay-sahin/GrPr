const User = require('../models/User');
const bcrypt = require('bcrypt');
const session = require('express-session');
exports.getUser = async (req, res) => {
 const user = await User.findOne({_id:req.session.userID})
 res.status(200).render('profile',{
   user,
   page_name: 'profile'
 })
};

exports.createUser = async (req, res) => {
  const users = await User.create(req.body);
  res.status(201).redirect('/sign-in');
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    await User.findOne({email: email }, (err, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            // USER SESSION
            req.session.userID = user._id;
            res.redirect('/profile');
          }
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(()=> {
    res.redirect('/');
  })
}