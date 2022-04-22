var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Các địa chỉ và trang cho đối tác */

//MỤC DRIVER
//Get trang Drivers list
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

//Get trang InsertDriver
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
//Get Drivers update
router.get('/putDrivers', async(req,res)=>{
  MongoClient.connect(uri, function(err,db){
    if(err) throw err;
    var db = db.db('CarRentalDatabase');
  })
})
//Put Drivers
router.put('/putDrivers', async(req,res)=>{
  MongoClient.connect(uri, function(err, db){
    if(err) throw err;
    var db = db.db('CarRentalDatabase');
    var driver = {
      DriverName: req.body.DriverName,
      DriverAge: req.body.DriverAge,
      DriverPhone: req.body.DriverPhone
    };
    dbo.collection("drivers").findOneAndUpdate()
  })
})
/* Kết thúc phần địa chỉ và trang cho đối tác */

module.exports = router;