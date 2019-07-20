const path = require('path');
const webpack = require('webpack');

/**
 * @type {import('webpack').Configuration}
 * */
const myWebpackConfig = {
	devtool: 'inline-source-map',
	mode: 'development',
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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			ENVIRONMENT: JSON.stringify('development'),
		}),
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		},
	},
};
module.exports = myWebpackConfig;
