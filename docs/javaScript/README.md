 # 基础

## 作用域[[scope]]
> 函数





> 全局 



## instanceof

> 1. instanceof用于确认对象是什么类型，与typeof相比，instanceof更为具体，且instanceof可以判断一个实例是否属于他的父类
> 2. instanceof判断一个实例是否属于他的父类的原理是原型链，实例的__proto__和父类的prototype相等

```js
function Foo(color) {
    this.color = color

    function getColor()  {
        return this.color
    }
}
let foo = new Foo('red')

console.log(foo instanceof Foo)  // true
```

