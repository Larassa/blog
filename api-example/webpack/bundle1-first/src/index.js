/**
 * index.js: webpack入口起点文件
 * 1. 运行指令：
 * 开发环境： npx webpack ./src/index.js -o ./dist/bundle.js --mode=development // 不加npx运行不了啊 官网上是没有加npx诶
 * 					webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./dist/bundle.js, 整体打包环境是开发环境
 * 生产环境：npx webpack ./src/index.js -o ./dist/bundle.js --mode=production // 不加npx运行不了啊 官网上是没有加npx诶
 * 					webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./dist/bundle.js, 整体打包环境是生产环境
 * 2. 结论：
 * 	1. webpack 只能处理js/json，不能处理css/img等其他资源
 * 	2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块
 * 	3. 生产环境比开发环境多一个压缩js代码
 */

import data from './data.json'
console.log(data)
function add(x, y) {
	return x + y;
}
console.log(add(1, 2))