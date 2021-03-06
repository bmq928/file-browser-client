const path = require('path');
const webpack = require('webpack');
// const DashboardPlugin = require('webpack-dashboard/plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    //entry: path.join(__dirname, 'src', 'index.js'),
    entry: path.join(__dirname, 'src'),
    output: {
        filename: 'app.js',
        //path: path.resolve(__dirname, 'public')
        path: path.join(__dirname, 'public', 'js'),
        // publicPath: './static'
    },
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg)$/, use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        //outputPath: '../../img/' //define the output of the file (relative path to the workdir)
                    }
                    // options: {
                    //     name: '[name].[ext]',
                    //     outputPath: '../../img/'
                    // }
                }
            }
        ]
    },
    //fix bug cannot resolve  'fs'
    node: {
        fs: "empty"
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css']
    },
    devtool: 'source-map',
    mode: 'development'
};