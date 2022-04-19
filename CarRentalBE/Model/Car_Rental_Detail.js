const mongoose = require('mongoose');
const Joi = require('joi');
const { Car_Detail_Schema } = require('./Car_Detail');

const Car_Rental_Detail_Schema = new mongoose.Schema({
    DriverName:{
        type: String,
        required: true,
        maxlength: 50
    },
    DriverPhone:{
        type: String,
        required: true,
        minlength: 8
    },
    Day_Start_Rent:{
        type: Date,
        default: Date.now(),
    },
    Day_End_Rent:{
        type: Date,
        default: Date.now() + 1000
    },
    Car_Detail_ID:{
        type: Car_Detail_Schema
    }
})