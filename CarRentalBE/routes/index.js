var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
const uri = "mongodb+srv://Tandiep:w7kEEceQ41B9zE4z@mongodb-carrental.f1yco.mongodb.net/CarRentalDatabase?retryWrites=true&w=majority";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render();
});
/* Phần địa chỉ và trang cho khách hàng */

/* Kết thúc phần địa chỉ và trang cho khách hàng */

module.exports = router;
