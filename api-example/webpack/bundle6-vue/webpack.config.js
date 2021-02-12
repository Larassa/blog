const { resolve } = require('path')
const htmlWebpackPlugins = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					'vue-loader'
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugins({
			template: './src/index.html'
		}),
		new VueLoaderPlugin()
	],
	externals:{
		// 加载第三方资源
		vue:'Vue'
	},
}