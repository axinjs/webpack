const path = require('path'); // 从nodejs中引入path变量

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  }, // 从src下面的index.js开始打包
  module: { // 模块打包配置
    rules: [ // 新增规则 可以有很多，数组
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
  output: {
    filename: 'main.js',  // 打包后生成的main.js
    path: path.resolve(__dirname, 'dist'), // 打包到dist文件夹
  }
}