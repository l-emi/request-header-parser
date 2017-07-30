var express = require('express');
// var router = express.Router();
var cors = require('cors');
var app = express();
var port = process.env.PORT || 8080;

app.use(cors());
// app.use(router);

app.get('/', function(req, res) {
    
});
