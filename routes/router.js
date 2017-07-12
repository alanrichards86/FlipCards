const models = require('../models/flipCards.js');
const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
  res.send('This Page Is Working!')
})







module.exports = router;
