# Proxy

> [**Proxy** 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)



- 语法

```js
const proxy = new Proxy(target, handle)
```

- 参数

```
target: 需要代理的目标对象，可以是任何类型的对象（数组、函数、其他代理等）
handle: 处理器对象。拦截目标对象的处理方法（可以为空，此时走目标对象的默认行为）
```

handle对象可拦截的方法见下方表格(可参照[`Proxy`文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#handler_%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95))

|                          |                           捕获方法                           |
| :----------------------: | :----------------------------------------------------------: |
|      getPrototypeOf      |                    Object.getPrototypeOf                     |
|      setPrototypeOf      |                    Object.setPrototypeOf                     |
|       isExtensible       |                      Object.isExensible                      |
|    preventExtensions     |                   Object.preventExtensions                   |
| getOwnPropertyDescriptor |               Object.getOwnPropertyDescriptor                |
|      defineProperty      |                    Object.defineProperty                     |
|           has            |                           in操作符                           |
|           get            |                           属性读取                           |
|           set            |                           属性设置                           |
|      deleteProperty      |                         delete操作符                         |
|         ownKeys          | Object.getOwnPropertyNames<br />Object.getOwnpropertySymbols |
|          apply           |                           函数调用                           |
|        construct         |                          new 操作符                          |

## `get`捕获器

- 语法

```js
var target = {
    name: 'target',
    handle: 'get'
} 

var p = new Proxy(target, {
    get: function(target, property, receiver) {
        
    }
})
```

- 参数

```
target: 目标对象
property: 被获取的属性名
receiver：Proxy或者继承Proxy的对象
```
