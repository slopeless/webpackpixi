var webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

// module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  //
  // Entries have to resolve to files! It relies on Node
  // convention by default so if a directory contains *index.js*,
  // it will resolve to that.
  // entry: {
  //   // src: PATHS.src,

  // },

// output: {
//     path: PATHS.build,
//     filename: 'src.js',
//   },
//   plugins: [
//     // new HtmlWebpackPlugin({
//     //   title: 'Webpack demo Oh',
//     // }),
//   ],
// };


module.exports = {
	entry: {
		vendor: ['pixi.js'],
		app: ["./app/main.js"],
	},
	output: {
		path: path.resolve(__dirname, "build"),
		// publicPath: path.resolve(__dirname, "../assets"),
		filename: "[name].bundle.js"
	},

	module: {
		rules: [
			// {	
			// 	test: /\.json$/, 
			// 	use: 'json'
			// },
			// {
			// 	enforce: "post",
		 //        include: path.resolve(__dirname, 'node_modules/pixi.js'),
		 //        use: 'transform?brfs'
			// }
		]
	},

	plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      }),
	],

	// watch: true
};




