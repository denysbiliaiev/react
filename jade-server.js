var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var React = require('react');
var Router = require('react-router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded('utf-8'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/build')));

var routes = require('./routes/');
app.use('/', routes);

//var routes = require('./routes/routes');
//app.get('/*', function (req, res) {
//    Router.run(routes, req.url, function(Handler) {
//        var Handler = React.createFactory(Handler);
//        var content = React.render(Handler());
//        res.render('index', { content: content });
//    });
//});

console.log(app.get('env'));

if (app.get('env') === "development") {
    var webpackMiddleware = require('webpack-dev-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.config');

    app.use(webpackMiddleware(webpack(config), {
        //contentBase: __dirname + '/public',
        publicPath: '/public/assets',
        colors: true,
        hot: true,
        inline: true,
    }));
}


/// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
///// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});

app.listen(3000);

module.exports = app;