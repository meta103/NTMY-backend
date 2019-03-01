const express = require('express');
const router = express.Router();

const Task = require('../models/tasks');

router.post('/new', (req, res, next) => {
  const { owner, action, to, toId, date, notes } = req.body;
  const newTask = new Task({
    owner,
    action,
    toId,
    toName: to,
    date,
    notes,
  });

  newTask.save()
    .then((task) => {
      res.status(200)
      res.json({ task })
    })
    .catch(next)
});

router.get('/list', (req, res, next) => {
  const userId = req.session.currentUser._id;
  console.log(userId);

  Task.find({ owner: userId })

    .then((tasks) => {
      console.log(tasks)
      res.status(200);
      res.json(tasks);
      //console.log(phone)
    })
    .catch(next)

})

router.get('/details/:id', (req, res, next) => {
  const taskId = req.params.id

  Task.find({ _id: taskId })
    .then((tasks) => {
      console.log(tasks)
      res.status(200);
      res.json(tasks);
      //console.log(phone)
    })
    .catch(next)

})


module.exports = router;