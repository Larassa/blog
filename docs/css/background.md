# background

> background 是一种简写属性，展开有color、image、size等（多个值的放置顺序不限）。

|      值      |                            可选值                            | 默认值    |                             描述                             |
| :----------: | :----------------------------------------------------------: | --------- | :----------------------------------------------------------: |
|   *-color    |                              -                               | -         |                           背景颜色                           |
|   *-image    |                url('')<br />linear-gradient()                | -         |                           背景图片                           |
|  *-position  |       top<br />bottom<br />left<br />right<br />center       | -         |                             位置                             |
|    *-size    | /* 关键字 */<br />cover<br />contain<br />inherit<br />initial<br />unset<br />/** 值 */<br />50% auto<br />50%, auto | auto auto |                             大小                             |
|   *-repeat   | repeat-x<br />repeat-y<br />repeat<br />space<br />round<br />no-repeat<br />repeat space<br />repeat repeat<br />round space<br />no-repeat round<br />inherit |           |                         是否重复平铺                         |
| *-attachment |                 scroll<br />fixed<br />local                 |           |  决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动  |
|    *-clip    | border-box // 背景延伸至边框外沿（但是在边框下层）。<br />padding-box // 背景延伸至内边距（padding）外沿。不会绘制到边框处。 <br />content-box // 背景被裁剪至内容区（content box）外沿。<br />text // 背景被裁剪成文字的前景色。 |           | 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。<br />注：如果没有设置背景图片（[`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)）或背景颜色（[`background-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color)），那么这个属性只有在边框（ [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)）被设置为非固实（soild）、透明或半透明时才能看到视觉效果（与 [`border-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) 或 [`border-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image) 有关），否则，本属性产生的样式变化会被边框覆盖。 |
|   *-origin   |  border-box<br />padding-box<br />content-box<br />inherit   |           | 指定背景图片的原点位置的背景相对区域<br />注：当使用 [`background-attachment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment) 为fixed时，该属性将被忽略不起作用。 |

## background-repeat

> 取值为space时，图像会尽可能得重复, 但是不会裁剪，第一个和最后一个图像会被固定在元素(element)的相应的边上, 同时空白会均匀地分布在图像之间. [`background-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)属性会被忽视, 除非只有一个图像能被无裁剪地显示. 只在一种情况下裁剪会发生, 那就是图像太大了以至于没有足够的空间来完整显示一个图像.

<img src="./img/bg-repeat-space.gif" />

> 取值为round时，图像会拉伸至充满容器，根据高度自动计算并重复拼接图像

<img src="./img/bg-repeat-round.gif" />