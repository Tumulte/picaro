const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, 'static/demo/main.js'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'App/Dist'),
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
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(jpg|png)$/,
				use: [{ loader: 'url-loader' }],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		},
	},
};
