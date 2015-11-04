var path = require('path');

module.exports = {
	context: path.resolve('js'),

	entry: ['./index'],
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		fileName: 'bundle.js'
	},

	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
};