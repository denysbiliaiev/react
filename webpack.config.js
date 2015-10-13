var webpack = require('webpack');
module.exports = {
    entry: {
        point1:['webpack/hot/dev-server', "./js/app.js"],
        point2: "./js/test.js",
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/HMR_path/',
        filename: "[name].bundle.js",
        //chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

};
