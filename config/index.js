// 工具 配置项
module.exports = {
    prod: {
        env: require('./prod.env')
    },
    dev:{
        env: require('./dev.env'),
        host: "192.168.3.52",
        port: "1212",
        autoOpenBrowser: false,
        assetsPublicPath: "/public",
        buildPath: "dist",
    }
}