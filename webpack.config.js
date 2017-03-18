const path = require('path')

const config = {
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'app.js')],
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: path.join(__dirname, 'dist', 'index.js')
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.scss', '.jpg', '.png']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory', 'standard-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    filename: path.join(__dirname, 'dist', 'index.js'),
    inline: true
  }
}

module.exports = config
