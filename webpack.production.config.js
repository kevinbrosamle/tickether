const path = require('path');
const webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server');

module.exports = {
  devtool: 'source-map',
  entry: [
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'HOST_ENV': '"web"'
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.jsx?/,
      loaders: ['babel'],
      include: APP_DIR
    },
    {
      test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
    },
  ]}
};
