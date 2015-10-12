var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/build', express.static(__dirname + '/build'));

var server = app.listen(3000, function() {
    console.log("server 3000");
});


