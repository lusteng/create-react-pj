const 
    webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),

    Config = require('../config')

    index = require('../src/index')

    
console.log('fffffff');

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'       
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, Config.dev.buildPath),
        publicPath: Config.dev.publicPath
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                loader: 'babel-loader',
                exclude:  /node_modules/ 
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = config