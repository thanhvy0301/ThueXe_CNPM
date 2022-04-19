const mongoose = require('mongoose');
const Joi = require('joi');
const { min, max } = require('joi/lib/types/array');

const companySchema = new mongoose.Schema({
    Country:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    Street:{
        type: String,
        required: true
    },
    CompanyName:{
        type: String,
        required: true
    }
});

function validateCompany(company){
    const schema = {
        Country: Joi.string().required().min(5).max(max),
        City: Joi.string().required().min(50).max(max),
        Street: Joi.string().required().min(50).max(max, 'utf8'),
        CompanyName: Joi.string.required().min(50).max(max)
    };
    return result = Joi.validate(company, schema);
}

exports.validateCompany = validateCompany;
exports.Company = Company;
exports.companySchema = companySchema;
