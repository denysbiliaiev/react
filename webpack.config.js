var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['webpack/hot/dev-server', "./js/app"],
    output: {
        path: __dirname + 'build/js/',
        filename: "bundle.js",
        publicPath: '/public/assets/js/',
    },
    module: {
        //preLoaders: [
        //    { test: /\.js$/, loader: 'jshint-loader', exclude: /node_modules/ }
        //],
        loaders: [
            { test: [/\.js?$/, /\.jsx$/, /\.es6$/], loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
};
