const mongoose = require('mongoose');
const CarRental = require('./CarRental');
const Schema = new mongoose.Schema;

let RentalSchema = new Schema({
    Place_Pick:{
        type:String,
        require:true
    },
    Place_Drop:{
        type: String,
        require:true
    },
    Time_Pick:{
        type:String
    },
    Time_Drop:{
        type:String
    },
    CarRent:{
        type: CarRental
    },
    Price_Rent:{
        type:Number,
    }
},
{collection: "RentalOrder"});

module.exports = new mongoose.model('Rental', RentalSchema);