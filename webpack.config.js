const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.posix.join(__dirname, './src/index.js'),
  output: {
    path: path.posix.join(__dirname, './dist'),
    filename: 'app.bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 5000,
  },
  plugins: [new HtmlWebpackPlugin()],
};
