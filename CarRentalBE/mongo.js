const mongoose = require('mongoose');
const mongoPath = 'mongodb+srv://Tandiep:w7kEEceQ41B9zE4z@mongodb-carrental.f1yco.mongodb.net/CarRentalDatabase?retryWrites=true&w=majority'

module.exports = async() => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}