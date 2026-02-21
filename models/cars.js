'use strict';

let mongoose = require('mongoose');


let Schema = mongoose.Schema;

let CarroSchema = Schema(
    {
        marca : String,
        modelo : Number,
        precio : Number,
        color : String

    }
);

module.exports = mongoose.model('carros', CarroSchema);

