# 数据类型

## 基本类型

变量存放在栈内存中。

- `Number`
- `String`
- `Boolean`
- `Null`
- `Undefined`
- `Symbol`(`es6`)

## 引用类型

变量存放在堆内存中，即栈中存放的是引用地址。统称Object类型。

- `Object`
- `Array`
- `Date`
- `Function`
- `RegExp`

引用类型赋值后会指向同一个地址，其中一个变量更改后其他的也会更改，这就涉及到[浅拷贝、深拷贝](./copy)的内容了。


## 数据类型判断
1. [`instanceof`运算符](./symbol.html#关系操作符)

2. [`typeof`运算符](./symbol.html#一元操作符)
3. `Object.prototype.toString()`

