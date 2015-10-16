var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
//config.entry.app.unshift("webpack-dev-server/client?http://localhost:3000", "webpack/hot/dev-server");

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    contentBase: __dirname + '/public',
    publicPath: '/public/assets/',
    colors: true,
    hot: true,
    inline: true,
}).listen(3000, 'localhost');

