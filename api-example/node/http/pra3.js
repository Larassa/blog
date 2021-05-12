/*
 * @Author: larassa
 * @Date: 2021-05-10 13:22:45
 * @LastEditors: larassa
 * @LastEditTime: 2021-05-10 14:08:16
 * @Description: file content
 */
let http = require('http')

var server = http.createServer()

// request 请求事件处理函数，接收参数有两个：
// request 请求对象
// response 响应对象 
server.on('request', function(request, response) {
	console.log('收到请求 url:', request.url)
	// 配置跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
	response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	let url = request.url
	if(url == '/safe') {
    console.log(request)
		response.end('aaaa')
	}
})
server.listen(8090, function() {
	console.log('启动成功')
})
