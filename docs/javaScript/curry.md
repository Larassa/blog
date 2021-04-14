# 函数柯里化

## 定义

柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。



对于`js`而言，实现函数柯里化的核心就在于闭包。

## 实现

```js
function curry(fn, ...args) {
    // 判断传过来的参数是否与函数的参数长度匹配
    if (args.length >= fn.length) {
        // 如果匹配就直接返回
        return fn(...args);
    } else {
        // 不匹配 就递归调用传参
        return (...args2) => curry(fn, ...args, ...args2);
    }
}
```



## 实例

