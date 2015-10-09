//require('node-jsx-babel').install({extension: '.jsx'})//extension: '.coffee'
require('babel/register');//.es6, .es, .jsx, .js

var express = require('express');
var app = express();
var path = require('path');

var React = require('react');
var ReactDOMServer  = require('react-dom/server');

app.set('view engine', 'jade')
//app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

var App = React.createFactory(require('./public/component.jsx'));

app.get('/', function(req, res) {
    var markup = ReactDOMServer.renderToString(App());
    res.render('index', { html: markup });
});

app.listen(3000, function() {
    console.log('listen');
})