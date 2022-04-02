const mongoose = require('mongoose');
const Joi = require('joi');
const autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://localhost/rental');
autoIncrement.initialize(connection);

const locationSchema = new mongoose.Schema(
    {
        country: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 60
        },
        city: {
            type: String,
            require: true,

        }
    }
);

locationSchema.plugin(autoIncrement.plugin, 'country');
const Location = mongoose.model('Location', locationSchema);
var country = connection.model('country', locationSchema);

function validateLocation(location){
    const schema = {
        country: Joi.string().min(3).max(60).required(),
        city: Joi.string().min(1).max(100).required()
    };
    return result = Joi.validate(location, schema);
}

exports.locationSchema = locationSchema;
exports.validateLocation = validateLocation;
exports.Location = Location;