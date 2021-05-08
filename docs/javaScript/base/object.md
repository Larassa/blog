# 对象

## 创建对象

### 字面量定义

```js
const obj = {
	name: 'obj'
}
```

### `Object.create`

```js
const obj = Object.create(null, {
	name: {
		value: 'obj'
	}
})
```

`Object.create`的第一个参数为null的话，创建出来的对象是没有原型的。

### `new`

```js
function Fun() {}

const obj = new Fun()
```



