const mongoose = require('mongoose');
const CarModel = require('../Model/CarModel');
const Schema = new mongoose.Schema;

let CarRentSchema = new Schema({
    Contact_Name:{
        type:String
    },
    Contact_Phone:{
        type:String,
        maxlength: 8
    },
    Contact_Email:{
        type:String,
        require: true
    },
    Car:{
        type:CarModel,
        require: true
    }
},{
    collection: 'CarRentals'
});

module.exports = mongoose.model('CarRental', CarRentSchema);