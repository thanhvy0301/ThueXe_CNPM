var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

const conn = mysql.createConnection({
  host: "containers-us-west-57.railway.app",
  user: "root",
  password: "1kS3ETcMlGadWKyLFhvz",
  database: "railway",
  port: 7670,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
