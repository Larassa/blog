# this

`this`是运行时绑定的（除了箭头函数），箭头函数的`this`是看上下文的。

- 经典栗子

```js
var name = "window";

function sayHi() {
    console.log(this)
    console.log(name);
    console.log(this.name);
}

let obj1 = (function () {
    var name = "1-1";
    return {
        name: "1-2",
        sayHi: function () {
            console.log(name);
            console.log(this.name);
        },
    };
})();

let obj2 = (function () {
    var name = "2-1";
    return {
        name: "2-2",
        sayHi: () => {
            console.log(name);
            console.log(this.name);
        },
    };
})();

sayHi(); 
obj1.sayHi(); 
obj2.sayHi(); 
obj1.sayHi = sayHi;
obj1.sayHi(); 
obj1.sayHi = obj2.sayHi;
obj1.sayHi(); 
```



上述的栗子来分析一下。

`sayHi()` 是在全局作用域下调用的，那么`this`的指向就是`window`。

`obj1.sayHi()`看起来是由`obj1`调用的，照理说`this`是指向`obj1`,但仔细看，`obj1`是立即执行函数，在加载的时候`obj1`的`this`就是指向`window`了，`obj1`的内部有个闭包，所以在`sayHi`函数里面能访问到`obj1`的数据，打印的`name`就是`2-1`, `this`的指向就是闭包的此法作用域。

`obj2.sayHi()`跟`obj1.say()`的不同指出在于`obj2.sayHi()`是箭头函数，那么箭头函数是看执行上下文的(即不看是谁调用的它，也不能手动绑定`this`)，目前是在`window`的环境下，那么`this`就是指向`window`。

`obj1.sayHi = sayHi` 这里是个赋值语句，将全局的`sayHi`函数赋值给了`obj1`,简单来讲就是将`obj1`的`sayHi()`函数的地址指向了全局的`sayHi`函数地址，那么再来看一下这个时候`sayHi`函数的 `name`的父级是`window`，`this`绑定的还是`obj1`的返回值。

`obj2`的逻辑也是如此，只不过需要注意的是`obj.say`是箭头函数。

