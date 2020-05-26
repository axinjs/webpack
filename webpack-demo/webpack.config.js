const path = require('path'); // 从nodejs中引入path变量
const htmlPlugin = require('html-webpack-plugin'); // 引入html打包插件
const cleanPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack') // 引入webpack插件

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './src/p.js',
  },
  devServer: {
    contentBase: './dist', // 借助webpack启动服务器，根目录就是打包之后的dist文件夹
    open: true, // 启动npm run start的时候自动打开浏览器
    proxy: { // 配置代理
      '/api': 'http://localhost:3000' 
    },
    port: 8080, // 配置端口号
    hot: true, // 开启热更新
    hotOnly: true // 就算是html文件没生效也不刷新页面
  },
  module: { // 模块打包配置
    rules: [ // 新增规则 可以有很多，数组
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      {
        test: /\.(jpg|jpeg)$/, // 检测文件是jpg/jpeg结尾的
        use: { 
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            // outputPath: '/images',
            limit: 1024 * 20
          }
        },
      },
      {
        test: /\.vue$/, // 检测文件是vue结尾的
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/, // 检测文件是vue结尾的
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/, // 检测文件是vue结尾的
        // use: ['style-loader','css-loader','sass-loader','postcss-loader']
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders : 2, // 通过import引入的scss文件，也要走下面两个loader
              // modules: true
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/, // 检测文件是vue结尾的
        use: {
          loader : 'file-loader',
          options: {
            outputPath: '/fonts/'
          }
        }
      },
    ]
  },
  plugins: [
    new htmlPlugin({
      template: './index.html'
    }),
    new cleanPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin() // 引入插件
  ],
  output: {
    publicPath: '/',
    filename: 'dist.js',  // 打包后生成的main.js
    path: path.resolve(__dirname, 'dist'), // 打包到dist文件夹
  }
}