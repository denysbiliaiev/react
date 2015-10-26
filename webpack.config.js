var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['webpack/hot/dev-server', "./js/app"],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: '/public/assets/',
    },
    module: {
        //preLoaders: [
        //    { test: /\.js$/, loader: 'jshint-loader', exclude: /node_modules/ }
        //],
        loaders: [
            {test: [/\.(jsx|js|es6)$/], loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader"), exclude: /node_modules/},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader"), exclude: /node_modules/},
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader"), exclude: /node_modules/},
            {
              test: /\.json$/,
              loader: 'json-loader!' + path.resolve('loaders/json'),
              exclude:/node_modules/
            },
            {
                test: /\.(png|jpg|ttf|eot|svg|woff)$/,
                loader: 'url-loader?limit=6000&name=[name]-[hash].[ext]',
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.DefinePlugin({
        //    'NODE_ENV': JSON.stringify('production')
        //}),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),
        //new webpack.ProvidePlugin({
        //    $: 'jquery',
        //    jQuery: 'jquery',
        //    'window.jQuery': 'jquery'
        //}),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
};
