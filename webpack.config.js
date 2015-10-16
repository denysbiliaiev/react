var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['webpack/hot/dev-server', "./js/app"],
    output: {
        path: __dirname + 'build/',
        filename: "bundle.js",
        publicPath: '/public/assets/',
    },
    module: {
        //preLoaders: [
        //    { test: /\.js$/, loader: 'jshint-loader', exclude: /node_modules/ }
        //],
        loaders: [
            {test: [/\.js?$/, /\.jsx$/, /\.es6$/], loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader"), exclude: /node_modules/},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader"), exclude: /node_modules/},
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader"), exclude: /node_modules/},
            {test: /\.png$/, loader:'url-loader?limit=99999999&name=[name]-[hash].[ext]', exclude:/node_modules/}
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('production')
        }),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
};
