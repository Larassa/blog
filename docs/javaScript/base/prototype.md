# 原型

## 概述



`prototype`是显式原型，主要是函数拥有。`__proto__`是隐式原型。

函数在创建的时候，就会生成`prototype`作为实例的原型，还会生成一个`__proto__`用来查找自己的原型。同理，后续的实例就会根据`__proto__`来查找自己的原型。那么，显然`prototype`是原型，是被`__proto__`来查找的，所以`__proto__`查找的路径就形成了原型链。

![](https://raw.githubusercontent.com/Larassa/docs-img/main/js/%E5%8E%9F%E5%9E%8B.png)

## 更改原型

- 直接更改原型链指向

  ```js
  let obj = { name: 'obj' }
  let temp = { name: 'temp' }
  temp.__proto__ = obj
  ```

- `Object.setPrototypeOf`

  ```js
  let temp = { name: 'temp' }
  
  Object.setPrototypeOf(temp, { name: 'objectSetProtottypeOf' })
  ```

  

