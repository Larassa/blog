/**
 * webpack.config.js 是webpack的配置文件
 * 作用：指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）
 * 所有构建工具都是基于 node.js 平台运行的 模块化默认采用commonjs
 */

 // resplve 用来拼接绝对路径的方法
 const { resolve } = require('path')
 module.exports = {
 
	 mode: 'development',
	 //  mode: 'production'
 
	 // webpack 配置
	 // 入口起点
	 // entry: resolve(__dirname, '../样式资源/src/index.js'),
	 entry: './src/index.js',
	 output: {
		 // 输出文件名
		 filename: 'bundle.js',
 
		 // 输出路径
		 // __dirname是nodejs的变量，代表当前文件目录的绝对路径
		 path: resolve(__dirname, 'dist')
	 },
	 // loader的配置
	 module: {
		 rules: [
			 // 详细loader的配置
 
			 // 不同的文件必须配置不同的loader处理
 
			 {
				 // 匹配哪些文件
				 test: /\.css$/,
 
				 // 使用哪些loader进行处理
				 use: [
					 // use数组中loader执行顺序：从右到左，从下到上 依次执行  // 为什么要这样呢？？ 我觉得是遵循语法运算规则 大部分的语言 语句执行顺序都是从右到左
					 
					 // 创建style标签，将js中的样式资源插入进行，添加到head中生效
					 'style-loader',
					 
					 // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
					 'css-loader'
				 ]
			 },
			 {
				 test: /\.less$/,
				 use: [
					 'style-loader',
					 'css-loader',
					 // 将 less 文件编译成 css 文件
					 // 需要下载 less 和 less-loader
					 'less-loader'
				 ]
			 },
			 {
				 test: /\.(sass|scss)$/,
				 use: [
					 'style-loader',
					 'css-loader',
					 // 将 sass | scss 文件编译成 css 文件
					 // 需要下载 sass 和 sass-loader
					 'sass-loader'
				 ]
			 }
		 ]
	 },
	 // plugins的配置
	 plugins: [
	 // 详细plugins的配置
 
	 ],
 }