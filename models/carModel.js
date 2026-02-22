'use strict';

let mongoose = require('mongoose');


let Schema = mongoose.Schema;

let CarSchema = Schema(
    {
        marca : String,
        modelo : Number,
        precio : Number,
        color : String

    }
);

module.exports = mongoose.model('cars', CarSchema);

