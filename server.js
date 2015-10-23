var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.render('llo wqweorld');
});

if (app.get('env') === "development") {
    var webpackMiddleware = require('webpack-dev-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.config');

    app.use(webpackMiddleware(webpack(config), {
        contentBase: __dirname + '/public',
        publicPath: '/public/assets',
        colors: true,
        hot: true,
        inline: true,
    }));
}

app.listen(3000);
