const mongoose = require('mongoose');
const Joi = require('joi');
const Car = require('../Model/Car');
const { companySchema } = require('./Company');

const Car_Detail_Schema = new mongoose.Schema({
    CarPlate: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 20
        
    },
    PolicyRent: {
        type: String
    },
    CarID: {
        type: carSchema,
        required: true
    },
    CompanyID: {
        type: companySchema,
        required: true,
    }
});

function validateDetail(Car_Detail){
    const schema = {
        CarPlate: Joi.string().min(10).max(20).required().trim(),
        PolicyRent: Joi.string().required(),
        CarID: Joi.string().required(),
        CompanyID: Joi.required().string()
    };
    return validateDetail(Car_Detail, schema);
}

exports.Car_Detail_Schema = Car_Detail;
exports.Car_Detail = Car_Detail;
exports.validateDetail = validateDetail;