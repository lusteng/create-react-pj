const 
    path = require('path')
    ,BaseConfig = require('./webpack.config.base') 

const config = { 
    ...BaseConfig
}

console.log(config);


module.exports = config