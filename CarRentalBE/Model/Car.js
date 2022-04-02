const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
})