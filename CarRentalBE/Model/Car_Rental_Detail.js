const mongoose = require('mongoose');
const Joi = require('joi');
const { Car_Detail_Schema } = require('./Car_Detail');
const { DriverSchema } = require('./Driver');

const Car_Rental_Detail_Schema = new mongoose.Schema({
    DriverName:{
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50
    },
    DriverPhone:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 10,
    },
    Day_Start_Rent:{
        type: Date,
        default: Date.now(),
    },
    Day_End_Rent:{
        type: Date,
        default: Date.now() + 1000
    },
    Car_Detail:{
        type: Car_Detail_Schema,
        required: true
    }
});

function validateRentalDetail(Car_Rental_Detail){
    const schema = {
        DriverName: Joi.string().required().min(10).max(50),
        DriverPhone: Joi.string().required().min(8).max(10),
        Day_Start_Rent: Joi.date(),
        Day_End_Rent: Joi.date(),
        Car_Detail_ID: Joi.required(),
    };
    return validateRentalDetail(Car_Detail, schema);
}

exports.Car_Rental_Detail_Schema = Car_Rental_Detail_Schema;
exports.Car_Rental_Detail = Car_Rental_Detail;
exports.validateRentalDetail = validateRentalDetail;