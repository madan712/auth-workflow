const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: ['@babel/polyfill', './src/index.jsx'],
	output: {
		filename: 'main.[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	performance: {
		hints: false
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		}, {
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader']
		}, {
			test: /\.html$/,
			use: ['html-loader']
		}]
	},
	plugins: [new HtmlWebpackPlugin({
		template: './src/index.html'
	}), new MiniCssExtractPlugin({
		filename: 'style.[contenthash].css'
	})]
}