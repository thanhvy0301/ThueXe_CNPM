const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Company, validateCompany} = require('../Model/Company');

router.get('/', async(req, res)=>{
    const company = await Company.find();
    res.send(company);
});

router.post('/', async(req, res)=>{
    const {error} = validateCompany(req.body);
    if(error) return res.status(400).send();
    const company = await Company.findById(req.body.locationId);
    if(!company) return res.status(400).send('Invalid location');
    let companies = new Company({
        locationId: {
            _id: location._id,
            country: location.country,
            city: location.city
        },
        CompanyRent: req.body.CompanyRent
    });
    companies = await companies.save();
    res.send(companies);
});

module.exports = router;