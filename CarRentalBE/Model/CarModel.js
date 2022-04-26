const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarSchema = new Schema({
    Car_Name: {
        type: String
    },
    Car_Type:{
        type: String
    },
    Car_Image:{
        type:String
    },
    Car_Price:{
        type: Number
    },
    Num_Car:{
        type: Number
    },
    Num_Sheet:{
        type: Number
    },
    Num_Luggage:{
        type:Number
    },
    Car_Color:{
        type: String
    },
    Car_Policy_Rent:{
        type: String
    }
},{
    collection: 'Cars'
});

module.exports = mongoose.model('Car', CarSchema);