const 
    webpack = require('webpack')
    ,path = require('path')
    ,HtmlPlugin = require('html-webpack-plugin')

    ,Config = require('../config')
    

    // is develop environment
    ,DEV = process.env.NODE_ENV === 'development' 
    
    ,resolveFn = (p) => path.resolve(p)
    


const config = {
    mode: DEV ? 'development' : 'production',
    entry: [ 
        'react-hot-loader/patch',
        './src/index.js'       
    ],
    output: {
        filename: '[name].[hash].js',
        path: resolveFn(Config.dev.buildPath),
        // publicPath: Config.dev.publicPath
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
            template: resolveFn('index.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = config