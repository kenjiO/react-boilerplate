const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: resolve(__dirname, 'src'),
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk',
    ],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, 'src')],
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'redux-react-starter',
      template: resolve(__dirname, 'src/index.html')
    }),
    new CopyWebpackPlugin([
      { from: resolve(__dirname, 'public'), to: resolve(__dirname, 'dist') }
    ])
  ],
  performance: { hints: 'warning' }
}
