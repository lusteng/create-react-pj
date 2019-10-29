const 
    path = require('path')
    ,BaseConfig = require('./webpack.config.base')
    ,Config = require('../config')  

const config = { 
    ...BaseConfig,
    devServer: {
        host: Config.dev.host,
        port: Config.dev.port,
        contentBase: path.resolve(__dirname, '../dist'),  //devserver root 目录
        hot: true,
        compress: true,
        overlay:{
            error: true  //显示错误信息
        }, 
        // publicPath: '/public',
        // historyApiFailback: {  //映射index页面
        //     index: '/public/index.html'
        // } 
    }
}

module.exports = config