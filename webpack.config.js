const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const javascriptRules = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};

const cssRules = {
  test: /\.s[ac]ss|\.css$/i,
  use: ['style-loader', 'css-loader', 'sass-loader'],
};

const imagesRules = {
  test: /\.(png|svg|jpg|gif)$/,
  use: ['file-loader'],
};

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [cssRules, javascriptRules, imagesRules],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new Dotenv(),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.plugins.push(new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }));
  }
  return config;
};
