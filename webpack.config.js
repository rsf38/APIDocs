const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './public' ),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
		{
		  test: /\.js$/,
		  exclude: /node_modules/,
		  loader: 'babel-loader',
		  query: {
			presets: ['react', 'es2015', 'stage-1']
		  }
		},
		{
		  test: /\.scss$/,
		  use: ExtractTextWebpackPlugin.extract({
			use: ['css-loader', 'sass-loader'],
			fallback: 'style-loader'
		  })
		}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
	new ExtractTextWebpackPlugin('styles.css')
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './public'),
	inline: true,
	open: true
  },
  devtool: 'eval-source-map'
};
