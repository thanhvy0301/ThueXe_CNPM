const mongoose = require('mongoose');
const express = require('express');
const locations = require('../CarRentalBE/Route/LocationRoute');
const companies = require('../CarRentalBE/Route/CompanyRoute');
const router = express.Router();
const app = express();

mongoose.connect('mongodb://localhost/rental')
.then(() => console.log("Connect to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB"));
app.use(express.json());
app.use('/api/locations', locations);
app.use('/api/companies', companies);
const port = 3000;
app.listen(port);