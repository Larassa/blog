const path = require('path')
const htmlWebpackPlugins = require('html-webpack-plugin')

module.exports = {

mode: 'development',

entry: './src/index.js',

output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist')
},
module: {
	rules: [
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
		// 打包其他资源（除了html/js/css）
		{
			// 不包括 css/js/html
			exclude: /\.(css|js|html)$/,
			loader: 'file-loader'
		},
		// 字体
		{
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: 'fonts/[name].[hash:7].[ext]'
			}
		},
		// 音频
		{
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: 'media/[name].[hash:7].[ext]'
			}
		},
	]
},
plugins: [
	new htmlWebpackPlugins({
		template: './src/index.html'
	})
]

}