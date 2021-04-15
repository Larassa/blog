# 递归

## 定义

当一个函数解决一个任务时，在解决的过程中它可以调用很多其它函数。在部分情况下，函数会调用 **自身**。这就是所谓的 **递归**。

## leetcode

### [递归乘法](https://leetcode-cn.com/problems/recursive-mulitply-lcci/)

> 题目描述：递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。

**示例1:**

```
 输入：A = 1, B = 10
 输出：10
```

**示例2:**

```
 输入：A = 3, B = 4
 输出：12
```

解题：

- 如果只使用加号、减号，那么就是简单的乘法运算变成加法运算

::: details JavaScript

```js
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function(A, B) {
  if(A == 0 || B == 0) {
    return 0
  }
  if(A < B) {
    return B + multiply(A - 1, B)
  } else {
     return A + multiply(A, B - 1)
  }
};
```

:::

- 根据题目提示，还可以用[位移](/javaScript/symbol)来解决。

::: details Java

```java
class Solution {
public:
    int multiply(int A, int B) {
        return (B&1?A:0)+(B>1?multiply(A+A,B>>1):0);
    }
};

作者：hust_dhc
链接：https://leetcode-cn.com/problems/recursive-mulitply-lcci/solution/ji-yu-kuai-su-mi-de-si-xiang-by-hust_dhc-z2he/
来源：力扣（LeetCode）
```

:::

