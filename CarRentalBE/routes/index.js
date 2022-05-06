var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

const conn = mysql.createConnection({
  host: "containers-us-west-39.railway.app",
  user: "root",
  password: "FSkXlaN72XqEXfLrhZ4X",
  database: "railway",
  port: 7662,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/location', function(req, res, next){
  conn.connect(function(err){
    if (err) throw err;
    console.log("Connect");
    conn.query("Select * From VITRI",function(err, result){
      console.log("Result: " + result);
      res.json(result);
    });
  });
});

router.post('location', function(req, res,next){
});
module.exports = router;
