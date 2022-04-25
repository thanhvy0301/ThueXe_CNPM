var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
const uri = "mongodb+srv://Tandiep:w7kEEceQ41B9zE4z@mongodb-carrental.f1yco.mongodb.net/CarRentalDatabase?retryWrites=true&w=majority";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../ThueXe_CNPM/CarRentalFE/src/App.js');
});

//Các trang và địa chỉ cho đối tác

// Get Trang list xe
router.get('/Car',function(req,res,next){
  MongoClient.connect(uri, function(err,db){
    if (err) throw err;
    var dbo = db.db("CarRentalDatabase");
    dbo.collection("Cars").find({}).toArray(function(err,result){
      if(err) throw err;
      res.send(result);
      db.close();
    });
  });
});

//Get Trang thêm xe
router.get('/Car/Create',function(req,res,next){

});
//Get Trang chi tiết xe
router.get('/Car/Detail/:id', function(req,res,next){

});
//Post Thêm xe
router.post('/Car/Create', function(req,res,next){
  MongoClient.connect(uri, function(err,db){
    if(err) throw err;
    var dbo = db.db("CarRentalDatabase");
    var newCar = {
      Car_Name: req.body.Car_Name,
      Car_Type: req.body.Car_Type,
      Car_Image: req.body.Car_Image,
      Car_Price: req.body.Car_Price,
      Num_Car: req.body.Num_Car,
      Num_Sheet: req.body.Num_Sheet,
    }
    dbo.collection("Cars").insertOne(newCar);
  });
});


//Put Cập nhật xe


module.exports = router;
