
let http = require('http')
var options = {
	hostname: 'localhost',
  port: 8090,
  path: '/',
  agent: false
}
http.get(options, (res) => {
  // Do stuff with response
	console.log('qqqq')
})