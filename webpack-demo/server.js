// 引入express webapck 中间件
var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
// 引入webpack配置文件
var config = require('./webpack.config.js')
var complier = webpack(config) // config配置传入 complier主要做编译

const app = express()
app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath // 声明自己的publicPath
}))

app.listen('3000', () => { // 监听3000端口启动成功 
  console.log('server is running')
})