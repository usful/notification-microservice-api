const path = require('path');
module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    publicPath: './dist',
    filename: './dist/index.js',
    library: '',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        test: /\.jsx?$/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};