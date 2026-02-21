'use strict';
 
let Carro = require('../models/carros');
 
function crearCarro(req, resp){
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
    else{
        let nuevoCarro = new Carro();
        nuevoCarro.marca= requestBody.marca;
        nuevoCarro.modelo = requestBody.modelo;
        nuevoCarro.precio = requestBody.precio;
        nuevoCarro.color = requestBody.color;
 
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
 
module.exports = {crearCarro};