var express = require('express');
var fs = require('fs');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.use(express.static(__dirname));

app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
