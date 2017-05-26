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
		app: [
			"./app/main.js",
		],

		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint


	},
	output: {
		path: __dirname,
		filename: "[name].bundle.js",
	// 	publicPath: "../assets"
	},

	context: __dirname,

	devServer: {

	    // contentBase: path.resolve(__dirname, "build"),
	//    contentBase: path.resolve(__dirname, "build"),
	    // match the output path

//	    publicPath: path.resolve(__dirname, "build"),
	    // match the output `publicPath`

	  },

	devtool: 'inline-source-map',


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

		new webpack.NamedModulesPlugin(),
		// prints more readable module names in the browser console on HMR updates

    	new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
    	}),
	],


};




