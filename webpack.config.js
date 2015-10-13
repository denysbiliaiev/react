var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/HMR_path/',
        filename: "bundle.js",
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
