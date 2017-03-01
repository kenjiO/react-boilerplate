const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    resolve(__dirname, 'src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/',
  },
  context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    // match the output path
    contentBase: resolve(__dirname, 'dist'),
    // match the output publicPath
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: [resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      title: '',
      template: './index.html',
    }),
    new CopyWebpackPlugin([
      { from: resolve(__dirname, 'public'), to: resolve(__dirname, 'dist') }
    ])
  ]
}
