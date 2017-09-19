const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '../views'),
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]_[hash:base64:5]!postcss!less'
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                loader: 'style!css!postcss'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: '"dev"',
            'process.env.NODE_ENV': '"dev"'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../views/page/index.html'),
            minify: {
              removeAttributeQuotes:true,
              removeEmptyAttributes:true
            }
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8088'})
    ]
};