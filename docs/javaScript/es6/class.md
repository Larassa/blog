# class

> 表示私有属性/方法时，可在属性/方法前面添加 # 或者 static

```js
class Fun {
    constructor(name) {
        this.name = name
    }
    static handle() {
        console.log('name:', this.name)
    }
}

let temp = new Fun('aaa')
console.log(temp.handle()) // 报错
```

> new.target 如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。