let release = process.argv.indexOf('--release') !== -1,
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    plugins = [
        new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'] }),
        new ExtractTextPlugin("bundle.css", { allChunks: true }),
        new HtmlWebpackPlugin({ template: './client/index.html', hash: true })
    ]

if (release) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({mangle:false}));
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new webpack.optimize.DedupePlugin());
}

module.exports = {
    entry:   {
        polyfills: './client/polyfills',
        vendor:    './client/vendor',
        app:       "./client/app/main",
    },
    output:  {
        path:       "./public",
        publicPath: '/',
        filename:   "[name].bundle.js"
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