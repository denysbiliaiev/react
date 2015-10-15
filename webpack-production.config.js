var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    loader: WebpackStrip.loader('console.log', 'debug', 'perflog'),
    exclude: /node_modules/
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;