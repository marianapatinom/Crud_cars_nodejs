'use strict';
 
require('dotenv').config();
let mongoose = require('mongoose');
let application = require('./application');
 
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 1702;

mongoose.connect(mongoUri).then(
    () => {
        console.log('Conexion exitosa');
        application.listen(port, () => {
            console.log(`Servidor escuchando en el puerto ${port}`);
        });
    },
    err => {
        console.error('Error al conectar a MongoDB:', err);
    }
);

