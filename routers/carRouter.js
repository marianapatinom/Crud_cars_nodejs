'use strict';
 
let express = require('express');
let router = express.Router();
let carController = require('../controllers/carController');
 
router.post('/api/car', carController.createCar);
 
module.exports = router;