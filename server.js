var express = require('express');
var app = express();
console.log(__dirname);
app.use('/', express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/assets'));

var server = app.listen(3000);


