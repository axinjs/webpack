const path = require('path'); // 从nodejs中引入path变量
const htmlPlugin = require('html-webpack-plugin'); // 引入html打包插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const webapckMerge = require('webpack-merge')
const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')

const commonConfig = {
  entry: {
    main: './src/jq.js',
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
        test: /\.(eot|svg|ttf|woff|woff2)$/, // 检测文件是vue结尾的
        use: {
          loader: 'file-loader',
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
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          // filename: 'vendors.js'
        },
        cacheGroups: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendor'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          // filename: 'common.js'
        }
      }
    }
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'dist'), // 打包到dist文件夹
  }
}

module.exports = (env) => {
  if(env && env.production){
    return webapckMerge(prodConfig, commonConfig)
  }
  return webapckMerge(devConfig, commonConfig)
}