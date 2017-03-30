var webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
	entry: {
		vendor: ['pixi.js'],
		app: ["./app/main.js"],
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].bundle.js"
	},

	module: {
       loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
        ],
		rules: [
		]
	},

	plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      }),
	],

	// watch: true
};




