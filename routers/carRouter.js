'use strict';
 
let express = require('express');
let router = express.Router();
let carController = require('../controllers/carController');
 
router.post('/api/car', carController.createCar);
router.get('/api/cars', carController.getCars);
router.get('/api/car/:id', carController.getCarById);
router.put('/api/car/:id', carController.updateCar);
router.delete('/api/car/:id', carController.deleteCar);
 
module.exports = router;