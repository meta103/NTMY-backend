const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');

const User = require('../models/user');

//const { isLoggedIn } = require('../helpers/middlewares');


router.get('/find/:id', (req, res, next) => {
  const userid = req.params.id;
  console.log(userid)


  User.findById(userid)
    .then((phone) => {
      res.status(200);
      res.json(phone);
      //console.log(phone)
    })
    .catch(next)
});

router.put('/add', (req, res, next) => {
  const { contactId, userId, contactsArray } = req.body.contactUserIdAndContacts;
  contactsArray.push(contactId);
  console.log(contactsArray)
  console.log(userId)

  User.findByIdAndUpdate(userId, { contacts: contactsArray })
    .then((user) => {
      res.status(200);
      res.json(user);
    })
    .catch(next)
});

router.get('/list', (req, res, next) => {
  const currentUser = req.session.currentUser;

  // contactsArray.forEach(element => {
  //   User.findById(element)
  //     .then((user) => {
  //       res.status(200);
  //       res.json(user);
  //     })
  //     .catch(next)

  // });

  User.findById(currentUser._id)
    .populate('contacts')
    .then((phone) => {
      console.log(phone)
      res.status(200);
      res.json(phone);
      //console.log(phone)
    })
    .catch(next)
});



module.exports = router;