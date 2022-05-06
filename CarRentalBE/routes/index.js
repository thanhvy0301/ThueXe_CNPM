var express = require('express');
var mysql = require('mysql');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Các trang và địa chỉ cho đối tác

// Get Trang list xe
/*router.get('/Car',function(req,res,next){
  MongoClient.connect(uri, function(err,db){
    if (err) throw err;
    var dbo = db.db("CarRentalDatabase");
    dbo.collection("Cars").find({}).toArray(function(err,result){
      if(err) throw err;
      res.send(result);
      db.close();
    });
  });
});*/
//Get trang Car
/*router.route('/Car').get(function(req,res){
  Car.find(function(err, carrental){
    if(err){console.log(err);}
    else{res.json(carrental);}
  });
});*/

//Post Create Car
/*router.route('/CarAdd').post(function(req,res){
  let car = new Car(req.body);
  car.save().then(car=>{res.status(200).json({'car':'car add success'});})
  .catch(err =>{res.status(400).send("Can't save to database");
});
});*/

//Get Trang Edit Car
/*router.route('/CarEdit/:id').get(function(req,res){
  let id = req.params.id;
  Car.findById(id, function(err, car){
    res.json(car);
  });
});*/

//Put Trang Edit Car
/*router.route('/CarEdit/:id').put(function(req,res){
  Car.findById(req.params.id, function(err, car){
    if(!car){res.status(404).send("Not found");}
    else{
      car.Car_Name=req.body.Car_Name;
    }
  })
})*/

/*
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
    dbo.close();
  });
});


//Put Cập nhật xe

*/
module.exports = router;
