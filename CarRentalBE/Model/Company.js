const mongoose = require('mongoose');
const Joi = require('joi');
const autoIncrement = require('mongoose-auto-increment');
const {locationSchema} = require('../Model/Location');

var connection = mongoose.createConnection('mongodb://localhost/rental');
autoIncrement.initialize(connection);

const companySchema = new mongoose.Schema({
    locationId: {
        type: locationSchema,
        required: true
    },
    CompanyRent: {
        type: String,
        required: true
    }
});

companySchema.plugin(autoIncrement.plugin, 'locationId');
const Company = mongoose.model('Company', companySchema);
var company = connection.model('company', companySchema);

function validateCompany(company){
    const schema = {
        LocationId: Joi.string().required(),
        CompanyRent: Joi.string().min(3).max(50).required()
    };
    return result = Joi.validate(company, schema);
}

exports.validateCompany = validateCompany;
exports.Company = Company;
exports.companySchema = companySchema;
