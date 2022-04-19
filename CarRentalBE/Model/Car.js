const mongoose = require('mongoose');
const Joi = require('joi');

const carSchema = new mongoose.Schema({
    Car_name: {
        type: String,
        required: true,
    },
    Car_Type: {
        type: String,
        required: true
    },
    Car_Price: {
        type: Number,
        required: true,
    },
    Num_Sheet: {
        type: [2,4,5,7,20,50],
        required: true,
    },
    Num_luggage: {
        type:  [2,4,8,10,20],
        required: true,
    },
    Num_Car: {
        type: Number,
        default: 0
    },
    IsDrive:{
        type: Boolean,
        default: false
    }
});

function validateCar(car){
    const schema = {
        Car_name: Joi.string().min(10).max(50).required(),
        Car_Type: Joi.string().min(10).max(20).required(),
        Car_Price: Joi.number().required(),
        Num_Sheet: Joi.number().required().interger().min(2).max(50),
        Num_luggage: Joi.number().interger().required().min(2).max(20),
        Num_Car: Joi.number().interger().required().min(0),
        IsDrive: Joi.Boolean()
    };
    return validateCar(car, schema);
}

exports.validateCar = validateCar;
exports.Car = Car;
exports.carSchema = carSchema;