const mongoose = require('mongoose');
const Joi = require('joi');

const DriverSchema = new mongoose.Schema({
    DriverName:{}
})

function validateDriver(Driver){
    const schema = {
        CarPlate: Joi.string().min(10).max(20).required().trim(),
        PolicyRent: Joi.string().required(),
        CarID: Joi.required(),
        CompanyID: Joi.required()
    };
    return validateDetail(Car_Detail, schema);
}

exports.Car_Detail_Schema = Car_Detail;
exports.Car_Detail = Car_Detail;
exports.validateDetail = validateDetail;