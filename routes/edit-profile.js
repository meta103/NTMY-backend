const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');

const User = require('../models/user');

//const { isLoggedIn } = require('../helpers/middlewares');


router.put('/profile', (req, res, next) => {
  const {
    name,
    surname,
    email,
    jobtitle,
    phone,
    company,
    address,
    linkedin
  } = req.body;

  User.findOneAndUpdate({ email }, { name, surname, email, jobtitle, phone, company, address, linkedin }, { new: true })
    .then((user) => {
      res.status(200);
      res.json(user);
    })
    .catch(next)
});



module.exports = router;