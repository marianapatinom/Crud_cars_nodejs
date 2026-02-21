'use strict';
 
let express = require('express');
let bodyParser = require('body-parser');
let routerCarros = require('./routes/carros');
 
let application = express();
application.use(bodyParser.json()); // Transforma el boy a Json automaticamente
application.use(routerCarros);
 
module.exports = application;use(bodyParser.json()); // tranforma el boy