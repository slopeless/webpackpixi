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
		app: ["./app/main.js"]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		// publicPath: "/assets/",
		filename: "bundle.js"
	},
	watch: true

};


// var path = require('path');

// module.exports = {
// 	devtool: 'cheap-source-map',
// 	entry: './src/app.js',
// 	output: {
//     	filename: 'bundle.js',
//     	path: path.resolve(__dirname, 'dist')
// 	}
// };
