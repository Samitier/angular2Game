"use strict";
let minimize = process.argv.indexOf('--minimize') !== -1,
    release = process.argv.indexOf('--release') !== -1,
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    plugins = [
        new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor'] }),
        new ExtractTextPlugin("bundle.css", { allChunks: true }),
        new HtmlWebpackPlugin({ template: './index.html', hash: true })
    ]

if (release || minimize) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({mangle:false}));
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new webpack.optimize.DedupePlugin());
}

module.exports = {
    entry:   {
        polyfills: './polyfills',
        vendor:    './vendor',
        app:       "./app/main",
    },
    output:  {
        path:       "../public",
        publicPath: '/',
        filename:   "[name].js"
    },
    devtool: (release) ? '' : "source-map",
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.ts/, 
                loaders: ['ts-loader'], 
                exclude: /node_modules/
            },
            {
                test: /(\.less|\.css)$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!less-loader?minimize!"),
            }
        ]
    }
}