'use strict';
 
let express = require('express');
let router = express.Router();
let carroController = require('../controllers/carros');
 
router.post('/api/carro', carroController.crearCarro);
 
module.exports = router;