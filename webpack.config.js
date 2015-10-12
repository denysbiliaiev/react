var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.resolve(__dirname, 'build'),
        //publicPath: '/assets/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.hbs$/, loader: 'handlebars-loader'},
            {test: /\.jsx$/, loader: 'jsx-loader'},
            {test: /\.jsx$/, loader: 'jsx-loader'},
            {
                test: /\.(eot|woff|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('production')
        }),
        new BowerWebpackPlugin({
            modulesDirectories: ['bower_components'],
            manifestFiles: ['bower.json', '.bower.json'],
            includes: /.*/,
            excludes: /.*\.less$/
        })
    ]
};
