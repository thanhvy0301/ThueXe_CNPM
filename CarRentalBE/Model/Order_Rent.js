const mongoose = require('mongoose');
const Joi = require('joi');
const { Car_Rental_Detail_Schema } = require('./Car_Rental_Detail');

const orderSchema = new mongoose.Schema({
    Payment:{
        type: Number,
        required: true,
        min: 1000,
    },
    PlacePick:{
        type: String,
        required: true,
    },
    PlaceDrop:{
        type: String,
        required: true
    },
    TimePick:{
        type: Date,
        default: new Date()
    },
    TimeDrop:{
        type: Date,
        default: new Date() + 1000
    },
    CarRentDetail:{
        type: Car_Rental_Detail_Schema,
        required: true
    },
    VoucherID:{},
    ComboID:{},
    UserID:{}
});

function validateOrderRent(Order){
    const schema = {
        Payment: Joi.number().required().min(1000),
        PlacePick: Joi.string(),
        PlaceDrop: Joi.string(),
        TimePick: Joi.date(),
        TimeDrop: Joi.date()
    };
    return validateOrderRent(Order, schema);
}

exports.orderSchema = orderSchema;
exports.Order = Order;
exports.validateOrderRent = validateOrderRent;