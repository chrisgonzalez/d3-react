var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'autoprefixer', 'sass'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: [
            '',
            '.js',
            '.es6'
        ]
    },
};
