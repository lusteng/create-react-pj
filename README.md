# create-react-pj
react脚手架

### --save 与 --save-dev 区别
一言以蔽之 dev只安装develop环境需要的插件，换言之，该部分插件不会出现在生产环境上

### 依赖安装包过程
+ webpack三件套
```
    cnpm i webpack webpack-cli webpack-dev-server -D
```

+ babel 套件
```
    cnpm i babel-loader @babel/cli @babel/core @babel/preset-env @babel/preset-react -D
    cnpm i @babel/plugin-proposal-class-properties @babel/plugin-transform-destructuring @babel/plugin-transform-modules-commonjs -D
```  
配置 .babelrc 文件

+ 热重载插件
```
cnpm i react-hot-loader -D
```

+ 安装兼容win系统cross-env插件
```
cnpm i cross-env -D
```

+ 安装html模块webpack插件
```
cnpm i html-webpack-plugin -D
···
 

+ 安装react 套件
```
    cnpm i react react-dom react-router-dom react-redux react-router-redux -S
```

### 创建配置文件
build >> 打包配置文件
+webpack.config.dev.js 开发环境
+webpack.config.prod.js 生产环境




