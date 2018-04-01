const path = require('path');
// eslint-disable-next-line import/no-unresolved
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.resolve(__dirname, '../src'),
      exclude: /node_modules/,
    },{
      test: /\.css$/,
      loaders: ['node-style-loader','css-loader?importLoaders=1'],
      exclude: /node_modules/
    },{
      test: [/\.png$/, /\.jpg$/],
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'image/png'
      }
    }],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '../.webpack'),
    filename: '[name].js',
  },
};