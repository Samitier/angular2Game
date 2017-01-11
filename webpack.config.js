"use strict";
let minimize = process.argv.indexOf('--minimize') !== -1,
    release = process.argv.indexOf('--release') !== -1,
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    plugins = [
        new ExtractTextPlugin("bundle.css", { allChunks: true }),
    ]

if (release || minimize) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({mangle:false}));
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new webpack.optimize.DedupePlugin());
}

module.exports = {
    entry:   {
    },
    output:  {
        path:       "./public",
        publicPath: '/',
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
