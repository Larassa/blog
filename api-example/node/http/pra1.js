let http = require('http')
// http.createServer(function (request, response) {
// 	response.writeHead(200, {'Content-Type': 'text/plain'}); // HTTP Response 头部
// 	// response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8877');
// 	response.end('Hello World\n'); // 返回数据 “Hello World”
// }).listen(8090);

var server = http.createServer()

// request 请求事件处理函数，接收参数有两个：
// request 请求对象
// response 响应对象 
server.on('request', function(request, response) {
	console.log('收到请求', request.url)
	response.setHeader('Content-Type', 'text/plain; charset=utf-8')
	// request.setHeader('Access-Control-Allow-Origin', '*')
	let url = request.url
	if(url == '/a') {
		response.end('bbbb')
	} else if (url == '/b') {
		let product = [
			{ name: 'apple' },
			{ name: 'banana' },
			{ name: 'pear' }
		]
		response.end(JSON.stringify(product))
	} else {
		response.end('aaaa')
	}
})
server.listen(8090, function() {
	console.log('启动成功')
})


