'use strict';
 
let express = require('express');
let bodyParser = require('body-parser');
let routerCars = require('./routers/carRouter');
 
let application = express();
application.use(bodyParser.json()); // Transforma el boy a Json automaticamente
application.use(routerCars);
 
module.exports = application;