const path = require('path')
module.exports = {
  mode: 'production',
  externals: 'lodash',
  entry: {
    main: './src/request.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index', 'child'],
    alias: {
      axin: path.resolve(__dirname,'')
    }
  },
  devServer: {
    overlay: true,
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true,
    proxy: {
      "index": "",
      "/api": {
        target: "https://www.fastmock.site/mock/",
        secure: false,
        changeOrigin: true
      }
    }
  },
  module:{
    rules: [{
      test: /\.(ts|tsx)/,
      use: ['ts-loader'],
      exclude: /node_modules/
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['eslint-loader']
    }]
  },
  output: {
    filename: 'library.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'library'
  }
}