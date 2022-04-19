const mongoose = require('mongoose');
const Joi = require('joi');
const carSchema = require('./Car');
const companySchema = require('./Company');

const DriverSchema = new mongoose.Schema({
    DriverName:{
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
    },
    DriverAge:{
        type: Number,
        required: true,
        min: 18,
        max: 40
    },
    DriverPhone: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 10
    },
    Car:{
        type: carSchema,
        required: true
    },
    Company:{
        type: companySchema,
        required: true
    }
});

function validateDriver(Driver){
    const schema = {
        DriverName: Joi.required().string().min(10).max(50),
        DriverAge: Joi.required().number().min(18).max(40),
        DriverPhone: Joi.required().string().min(8).max(10),
        CarID: Joi.required(),
        CompanyID: Joi.required()
    };
    return validateDriver(Driver, schema);
}

exports.DriverSchema = DriverSchema;
exports.Driver = Driver;
exports.validateDriver = validateDriver;