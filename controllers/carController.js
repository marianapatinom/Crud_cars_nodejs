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
 
function getCars(req, resp){
    Carro.find({}).then(
        (cars) => {
            resp.status(200).send({cars});
        },
        err => {
            resp.status(500).send({'message':'internal error', 'error': err});
        }
    );
}

function getCarById(req, resp){
    let carId = req.params.id;

    Carro.findById(carId).then(
        (car) => {
            if(!car){
                resp.status(404).send({'message': 'car not found'});
            } else {
                resp.status(200).send({car});
            }
        },
        err => {
            resp.status(500).send({'message':'internal error', 'error': err});
        }
    );
}

function updateCar(req, resp){
    let carId = req.params.id;
    let update = req.body;

    if(update.marca) update.marca = update.marca.toLowerCase();
    if(update.color) update.color = update.color.toLowerCase();

    Carro.findByIdAndUpdate(carId, update, {new: true}).then(
        (carUpdated) => {
            if(!carUpdated){
                resp.status(404).send({'message': 'car not found'});
            } else {
                resp.status(200).send({'message': 'car updated', 'car': carUpdated});
            }
        },
        err => {
            resp.status(500).send({'message':'internal error', 'error': err});
        }
    );
}

function deleteCar(req, resp){
    let carId = req.params.id;

    Carro.findByIdAndDelete(carId).then(
        (carDeleted) => {
            if(!carDeleted){
                resp.status(404).send({'message': 'car not found'});
            } else {
                resp.status(200).send({'message': 'car deleted', 'car': carDeleted});
            }
        },
        err => {
            resp.status(500).send({'message':'internal error', 'error': err});
        }
    );
}

module.exports = {createCar, getCars, getCarById, updateCar, deleteCar};