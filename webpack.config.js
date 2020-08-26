const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function webpackConfig(env) {
	const { production } = env;
	return {
		entry: './src/index.js',
		output: {
			path: path.join(__dirname, 'server/public'),
			filename: '[name].bundle.js',
			chunkFilename: '[name].bundle.js',
			publicPath: '/',
		},
		mode: 'development',
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				components: path.resolve(__dirname, 'src/components'),
			},
		},
		devServer: {
			contentBase: path.resolve(__dirname, 'dist'),
			historyApiFallback: true,
		},
		devtool: production ? '' : 'inline-source-map',
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'eslint-loader',
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.scss$/,
					use: [
						production ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.css$/,
					use: [production ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
							},
						},
					],
				},
			],
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						chunks: 'initial',
						name: 'vendor',
						enforce: true,
					},
				},
			},
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: './index.html',
				filename: './index.html',
			}),
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[name].css',
			}),
		],
	};
};
