
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].chunk.css'
  })],
  module: {
    rules: [{
      test: /\.css$/, // 检测文件是css结尾的
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
      {
        test: /\.scss$/, // 检测文件是scss结尾的
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  output: {
    filename: '[name].[contenthash].js', 
  }
}

module.exports = prodConfig