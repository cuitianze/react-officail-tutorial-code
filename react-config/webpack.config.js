var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'babel/polyfill',
    './index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader?stage=0' }
    ]
  },
  devServer: {
    port: 5000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'React!',
      devServer: 'http://localhost:5000',
      appMountId: 'app'
    })
  ]
}
