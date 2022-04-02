const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Location, validateLocation} = require('../Model/Location');

router.get('/', async(req, res)=>{
    const location = await Location.find();
    res.send(location);
});

router.post('/', async(req, res)=>{
    const {error} = validateLocation(req.body);
    if (error) return res.status(400).send();
    let locations = new Location({
        country: req.body.country,
        city: req.body.city
    });
    locations = await locations.save();
    res.send(locations);
});

router.put('/:id', async(req, res)=>{
    const {error} = validateLocation(req.body);
    if(error) return res.status(400).send();
    const locations = await Location.findByIdAndUpdate(req.params.id,
        {
            country: req.body.country,
            city: req.body.city
        }, {new: true});
        if(!locations) return res.status(404).send("The location is not create yet");
        res.send(locations);
});

router.delete('/:id', async(req, res)=>{
    const Locations = await Location.findByIdAndRemove(req.params.id);
    if(!Locations) return res.status(404).send("Can't delete the location");
    res.send(Locations);
});

router.get('/:id', async(req, res)=>{
    const Locations = await Location.findById(req.params.id);
    if(!Locations) return res.status(404).send("The location does not exists");
    res.send(Locations);
})

module.exports = router;