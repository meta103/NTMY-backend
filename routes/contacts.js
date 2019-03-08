const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/find/:id', (req, res, next) => {
  const userid = req.params.id;


  User.findById(userid)
    .then((phone) => {
      res.status(200);
      res.json(phone);
    })
    .catch(next)
});

router.put('/add', (req, res, next) => {
  const { contactId, userId, contactsArray } = req.body.contactUserIdAndContacts;
  contactsArray.push(contactId);

  User.findByIdAndUpdate(userId, { contacts: contactsArray }, { new: true })
    .then((user) => {
      req.session.currentUser = user;
      res.status(200);
      res.json(user);
    })
    .catch(next)
});

router.get('/list', (req, res, next) => {
  const currentUser = req.session.currentUser;

  User.findById(currentUser._id)
    .populate('contacts')
    .then((phone) => {
      res.status(200);
      res.json(phone);
    })
    .catch(next)
});



module.exports = router;