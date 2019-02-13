const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, 'App/Static/styleConfigurator.js'),
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'App/Dist'),
		overlay: true,
		hot: true,
		stats: { colors: true },
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'App/Dist'),
		filename: '[name]-bundle.js',
	},
	module: {
		rules: [],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.min.js',
		},
	},
};
