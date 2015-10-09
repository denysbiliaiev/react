//require('node-jsx-babel').install({extension: '.jsx'})//extension: '.coffee'
//require("node-jsx").install();
require('babel/register');//.es6, .es, .jsx, .js

var express = require('express');
var path = require('path');

var React = require('react');
//var Router = require('react-router');
//var routes = require('./public/routes');
var ReactDOMServer  = require('react-dom/server');

var app = express();

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, './public')));

var Com = React.createFactory(require('./public/components/app'));

app.get('/', function(req, res) {
    //Router.run(routes, req.url, function(Handler) {
        var content = ReactDOMServer.renderToStaticMarkup(Com());
        res.render('index', {content: content});
    //});
});

app.listen(3000, function() {
    console.log('listen');
})