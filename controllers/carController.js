'use strict';
 
let Carro = require('../models/carModel');
 
function createCar(req, resp){
    let requestBody = req.body;
 
    if(!requestBody){
        resp.status(400).send({'message': 'no body was sent'});
    }
    else if(!requestBody.marca || !requestBody.precio){
        resp.status(400).send({'message': 'missing mandatory fields'});
    }
    else if(requestBody.marca.trim() === '' || requestBody.precio <= 0){
        resp.status(400).send({'message': 'invalid values in mandatory fields'});
    }
    else if(requestBody.precio <= 1000000){
        resp.status(400).send({'message': 'The car must be worth more than a million.'});
    }
    else{
        let nuevoCarro = new Carro();
        nuevoCarro.marca = requestBody.marca.toLowerCase();
        nuevoCarro.modelo = requestBody.modelo;
        nuevoCarro.precio = requestBody.precio;
        nuevoCarro.color = requestBody.color.toLowerCase();
 
        nuevoCarro.save().then(
            (carroCreado) => {
                resp.status(201).send({'message': 'car created', 'car': carroCreado});
            },
            err => {
                resp.status(500).send({'message':'internal error', 'error': err})
            }
        );
    }
}
 
module.exports = {createCar};