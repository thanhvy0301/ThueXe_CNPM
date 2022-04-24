var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
const uri = "mongodb+srv://Tandiep:w7kEEceQ41B9zE4z@mongodb-carrental.f1yco.mongodb.net/CarRentalDatabase?retryWrites=true&w=majority";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//Get Drivers list
router.get('/getDrivers', function(req, res, next) {
  MongoClient.connect(uri, function(err, db){
    if (err) throw err;
    var dbo = db.db("CarRentalDatabase");
    dbo.collection("drivers").find({}, function(err, result) {
      if (err) throw err;
      db.close();
    });
  });
  res.send();
});

//Get InsertDriver
router.get('/insrtDrivers', function(req,res,next){
  res.render('index',{title:'express'});
})

//Post Drivers
router.post('/insertDrivers', async(req,res)=>{
  MongoClient.connect(uri,function(err,db){
    if (err) throw err;
    var dbo = db.db("CarRentalDatabase");
    var driver = {
      DriverName: req.body.DriverName,
      DriverAge: req.body.DriverAge,
      DriverPhone: req.body.DriverPhone
    };
    dbo.collection("drivers").insertOne(driver, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    });
  });
  res.send();
})


module.exports = router;
