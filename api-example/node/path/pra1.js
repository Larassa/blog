const path = require('path')
let temp = null
// console.log(process.env.PATH);
// console.log(process.env.NODE_ENV)
// console.log(process.env.PATH.split(path.delimiter))
// console.log(path.dirname('../fs/read.js'))
// console.log(path.extname('../../XMind/Vue.xmind'))
// temp = path.format({
//   root: '/ignored',
//   dir: '/home/user/dir',
//   base: 'file.txt',
// 	name: 'file',
//   ext: '.txt'
// });
// temp = path.isAbsolute('/path模块.xmind')
// temp = path.parse('/目录1/目录2/文件.txt')
// temp = path.resolve('', '../dist/index.html')
temp = path.basename('../temp/text.js', '.html');
console.log(temp)