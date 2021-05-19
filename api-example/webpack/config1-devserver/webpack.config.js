
const { resolve } = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist')
	},
	module: {
		rules: []
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	// 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
	// 特点： 只会在内存编译打包，不会有任何输出
	// 启动 devServer  指令为：npx webpack-dev-server
	devServer: {
		// 项目构建后路径
		contentBase: resolve(__dirname, 'dist'),
		// 启动gzip压缩
		compress: true,
		// 端口号
		port: 3000,
		// 自动打开浏览器
		open: true,
		// 允许服务器外部可访问
		host: '0.0.0.0',
		// 允许使用ip访问
		useLocalIp: true,
		// 热更新
		hot: false,

		before(app){
			console.log('before',app)
		},
		// after(app){
		// 	// do fancy stuff
		// }
	}
}