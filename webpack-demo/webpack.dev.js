const webpack = require('webpack') // 引入webpack插件

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
      test: /\.css$/, // 检测文件是css结尾的
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.scss$/, // 检测文件是scss结尾的
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // 通过import引入的scss文件，也要走下面两个loader
            // modules: true
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }]
  },
  devServer: {
    contentBase: './dist', // 借助webpack启动服务器，根目录就是打包之后的dist文件夹
    open: true, // 启动npm run start的时候自动打开浏览器
    proxy: { // 配置代理
      '/api': 'http://localhost:3000' 
    },
    port: 8080, // 配置端口号
    hot: true, // 开启热更新
    //hotOnly: true // 就算是html文件没生效也不刷新页面
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 引入插件
  ],
  output: {
    filename: 'main.js',  // 打包后生成的main.js
  }
}

module.exports = devConfig