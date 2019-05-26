const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: {
		appDemo: [
			path.resolve(__dirname, 'static/demo/main.js'),
			path.resolve(__dirname, 'App/Static/styleConfigurator.js'),
		],
		appBlog: [
			path.resolve(__dirname, 'static/demo/main.js'),
			path.resolve(__dirname, 'App/Static/styleConfigurator.js'),
		],
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
					{ loader: miniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
						options: {
							minimize: true,
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
	plugins: [
		new miniCssExtractPlugin(),
		new optimizeCssAssetsPlugin(),
		new webpack.DefinePlugin({ ENVIRONMENT: JSON.stringify('production') }),
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		},
	},
};
