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
			test: /\.(css|less|scss)$/,
			loader: [
				'style-loader',
				'css-loader',
				'less-loader',
				'sass-loader'
			]
		},
		{
			// 问题： 默认处理不了html中img图片
			test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
			// 下载 url-loader file-loader
			loader: 'url-loader',
			options: {
				// 图片大小小于8kb，就会被base64处理
				// 优点： 减少请求数量（减轻服务器压力）
				// 缺点： 图片体积会更大（文件请求速度更慢）
				limit: 8 * 1024,
				// 问题： 因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
				// 解析时会出问题：[object Module] (不过这个问题我没有出 教学上是出了的？？？？)
				// 解决： 关闭url-loader的es6模块化，使用commonjs模块
				esModule: false,
				// img/ 将文件放在img文件夹下
				// 给图片进行重命名
				// [name] 取原来的文件名
				// [hash:10]取图片的hash的前10位
				// [ext]取文件原来扩展名
				name: 'img/[name].[hash:10].[ext]'
			}
		},
		{
			test: /\.html$/,
			// 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
			loader: 'html-loader'
		}
	]
},
plugins: [
	new htmlWebpackPlugins({
		template: './src/index.html'
	})
]

}