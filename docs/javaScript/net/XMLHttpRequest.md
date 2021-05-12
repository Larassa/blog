# XMLHttpRequest

`XHR`是用来发送`HTTP`请求，实现数据交换来完成页面局部更新。是`ajax`网络请求的核心。

`XHR`是一个构造函数，可以用`new`出实例。

```js
const http = new XMLHttpRequest()
```

建立连接`XMLHttpRequest.open(method, url)`

```js
http.open('get', 'xxx')
```

发送请求`XMLHttpRequest.send([data])`参数是`body`数据，可选。

```js
let data = { name: 'aaa' }
http.send(JSON.stringfy(data))
```

设置请求头`XMLHttpRequest.setRequestHeader(key, value)`。需要在`open`和`send`中间设置。

```js
http.setRequestHeader('Content-type', 'application/json')
```

请求成功的钩子`XMLHttpRequest.onload`

```js
http.onload = function(e) {}
```

请求的钩子，无论请求的状态是什么`XMLHttpRequest.onloadend`

```js
http.onloadend = function(e) {}
```

请求接收到数据时钩子`XMLHttpRequest.loadstart`

```js
http.loadstart = function(e) {}
```

中断请求钩子`XMLHttpRequest.abort`

```js
http.abort()
```





