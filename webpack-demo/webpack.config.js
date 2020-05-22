const path = require('path'); // 从nodejs中引入path变量

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  }, // 从src下面的index.js开始打包
  module: { // 模块打包配置
    rules: [ // 新增规则 可以有很多，数组
      {
        test: /\.jpg$/, // 检测文件是jpg结尾的
        use: { 
          loader: 'file-loader'
        }
      }
    ]
  },
  output: {
    filename: 'main.js',  // 打包后生成的main.js
    path: path.resolve(__dirname, 'dist'), // 打包到dist文件夹
  }
}