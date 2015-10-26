var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main.jsx')],
        menu: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/menu.jsx')],
        shop: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/shop.jsx')],
        chat: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/chat.jsx')],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
        publicPath: 'public/assets/',
    },
    module: {
        loaders: [
            {
                test: [/\.(jsx|js|es6)$/],
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader"),
                exclude: /node_modules/},
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
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
            //'NODE_ENV': JSON.stringify('development')
        }),
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

    //devServer: {
    //    contentBase: __dirname + '/public',
    //    publicPath: '/public/assets',
    //    colors: true,
    //    hot: true,
    //    inline: true,
    //}
};
