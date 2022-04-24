const express = require('express');
const Player = require('../models/player')
const router = express.Router()
const app = express()
const dateValue = require('../utils/dateFunction')

router.get('/players/:date', (req, res) => {
  fetchDate = req.body.date
  Player.find({date:fetchDate},(err, obj) => {
    if (err) {
      return console.log("something hap[pened")
    }
    res.json(obj)
  })
});

router.post('/players', (req, res) => {
  const player = new Player({
    name: req.body.name,
    win: req.body.win,
    loss: req.body.loss,
    date: dateValue.utcDate
  });
  player.save((err, obj) => {
    if (err) {
      return console.log("something happened")
    } else {
      res.json(obj)
    }
  })
})
router.delete('/players', (req, res) => {
  Player.deleteOne({ name: "Shivam" }, (err, obj) => {
    if (err) {
      return console.log("something hap[pened")
    }
    res.json(obj)
  })
})
router.put('/players', (req, res) => {
  Player.update({ name: "Shivam D" }, { $set: { name: "Shivam" } }, (err, obj) => {
    if (err) {
      return console.log("something happened")
    }
    res.json(obj)
  })
})

module.exports = router