var webpack = require('webpack');

var config = require('./webpack.config');
var compiler = webpack(config);

compiler.run(function () {
    console.log(stats.toJson()); // по завершению, выводим всю статистику
});