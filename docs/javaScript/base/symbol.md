# 运算符

## 位运算符

> 每个操作数都是先进行32位的二进制转换计算得出结果，再将其转换为十进制。（操作数的位置与计算结果无关）

|   运算符   |   示例    |                             描述                             |
| :--------: | :-------: | :----------------------------------------------------------: |
|  与  AND   |  `a & b`  |   在a,b的位表示中，每一个对应的位都为1则返回1， 否则返回0.   |
|   或 OR    |  `a | b`  | 在a,b的位表示中，每一个对应的位，只要有一个为1则返回1， 否则返回0. |
|  异或 XOR  |  `a ^ b`  | 在a,b的位表示中，每一个对应的位，两个不相同则返回1，相同则返回0. |
|   非 NOT   |   `~ a`   |                      反转被操作数的位。                      |
| 左移 shift | `a << b`  |             将a的二进制串向左移动b位,右边移入0.              |
|    右移    | `a >> b`  |       把a的二进制表示向右移动b位，丢弃被移出的所有位.        |
| 无符号右移 | `a >>> b` | 把a的二进制表示向右移动b位，丢弃被移出的所有位，并把左边空出的位都填充为0 |

在不考虑性能的情况下，使用位运算符还能进行一些运算上的巧用

- 使用`&`判断奇偶

```js
// 偶数 & 1 = 0
2 & 1   // 0

// 奇数 & 1 = 1

3 & 1   // 1
```

- 使用`~, >>, <<, >>>, |`来取整

```js
~~ 1.11      // 1
1.11 >> 0    // 1
1.11 << 0    // 1
1.11 | 0    // 1
```

- 使用`^`来完成值交换

```js
let a = 2
let b = 3

a ^= b
b ^= a
a ^= b

// a = 3  b = 2
```



## 逻辑运算符

> 用于布尔值之间。操作数的位置不同，计算的结果也不同（短路求值）

| 运算符  |   示例   |                             描述                             |
| :-----: | :------: | :----------------------------------------------------------: |
| 与  &&  | `a && b` |            如果a为false直接返回a(不看b),否则返回b            |
| 或 \|\| | `a || b` |                如果a为true则返回a，否则返回b                 |
|  非 ！  |   `!a`   | a为true就返回false  a为false就返回true<br />!!双非 将任意值强制转换为其对应的布尔值 |

位运算和逻辑运算虽然看起来很相似，但其对操作数的运算是大不相同的，如下面栗子所示。

```js
// 位运算
2 & 4 //  0
2 | 4  // 6

// 逻辑运算
2 && 4 // 4
4 && 2 // 2
2 || 4 // 2
4 || 2 // 4
```

## 赋值运算符

|                             名字                             | 简写的操作符 |     含义      |
| :----------------------------------------------------------: | :----------: | :-----------: |
| [赋值(Assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment) |   `x = y`    |    `x = y`    |
| [加法赋值(Addition assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment) |   `x += y`   |  `x = x + y`  |
| [减法赋值(Subtraction assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Subtraction_assignment) |   `x -= y`   |  `x = x - y`  |
| [乘法赋值(Multiplication assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Multiplication_assignment) |   `x *= y`   |  `x = x * y`  |
| [除法赋值(Division assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Division_assignment) |   `x /= y`   |  `x = x / y`  |
| [求余赋值(Remainder assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Remainder_assignment) |   `x %= y`   |  `x = x % y`  |
| [求幂赋值(Exponentiation assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Exponentiation_assignment) |  `x **= y`   | `x = x ** y`  |
| [左移位赋值(Left shift assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Left_shift_assignment) |  `x <<= y`   | `x = x << y`  |
| [右移位赋值(Right shift assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Right_shift_assignment) |  `x >>= y`   | `x = x >> y`  |
| [无符号右移位赋值(Unsigned right shift assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Unsigned_right_shift_assignment) |  `x >>>= y`  | `x = x >>> y` |
| [按位与赋值(Bitwise AND assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_AND_assignment) |   `x &= y`   |  `x = x & y`  |
| [按位异或赋值(Bitwise XOR assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_XOR_assignment) |   `x ^= y`   |  `x = x ^ y`  |
| [按位或赋值(Bitwise OR assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_OR_assignment) |   `x |= y`   |  `x = x | y`  |

- `es6`的解构赋值

```js
const [a, b] = [1, 2]  // a: 1  b: 2

const obj = {
    a: 1,
    b: 2
}
const temp = { ...obj } // temp = { a: 1, b: 2 }
```

## 一元操作符

- `typeof`

可以用来判断数据是什么类型的，但如果是引用类型的数据则统一显示`[object object]`。

## 关系操作符

- `instanceof`

   1. `instanceof`用于确认实例对象是什么类型，判断一个实例是否属于他的父类。
  2. `instanceof`判断一个实例是否属于他的父类的原理是原型链，实例的`__proto__`和父类的`prototype`相等。
   3. `instanceof`不能用于判断原始值类型。

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




## 参考

- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators)

- [https://juejin.cn/post/6844903568906911752](https://juejin.cn/post/6844903568906911752)