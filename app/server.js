var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var bodyParser = bodyParser();




app.get("/home", function(req, res){




res.send("hellow");



});


app.listen(3000);