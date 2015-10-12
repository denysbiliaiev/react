var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
//config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
var compiler = webpack(config);

//compiler.run(function () {
//    console.log('build');
//    //console.log(stats.toJson()); // по завершению, выводим всю статистику
//});

var devServer = new WebpackDevServer(
    compiler,
    {
        contentBase: __dirname + '/public',
        publicPath: '/build/',
        colors: true,
        inline: true,
        //hot: true,
    }
).listen(8088, 'localhost');

