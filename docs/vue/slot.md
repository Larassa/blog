# 插槽

## 概念

> 插槽是指父组件使用子组件时向子组件传递元素，子组件来接收

## 语法使用

> 父组件

```vue
<template>
	<div>
    <sonCom :data="data">
      <div>无名称插槽 我是父组件</div>
			<!--  具名插槽写法一 -->
			<template v-slot:name> 
				<div>juming</div>
			</template>
			<!-- 具名插槽写法二 -->
			<div slot="name">具名插槽</div> 
			<!-- 插槽传值 -->
			<template slot-scope="scope">
					<p>索引：{{JSON.stringify(scope)}}</p>
					<p>索引：{{scope.$index}}</p>
					<p>姓名:{{scope.row.name}}</p>
					<p>年龄: {{scope.row.age}}</p>
					<p>性别: {{scope.row.sex}}</p>
			</template>
  	</sonCom>
	</div>
</template>

<script>
  import sonCom from './sonCom'
export default {
	data () {
		return {
      data:[{
        name: 'kongzhi1',
				age: '29',
				sex: 'man'
      }]
		}
	}
}
</script>
```

> 子组件

```vue
<template>
	<div>
    我是子组件
    <!-- 接收父组件传过来默认的元素 -->
    <slot></slot> 
    <!-- 接收父组件传过来的指定元素 -->
    <slot name="name"></slot> 
    <!-- 渲染父组件带数据的元素 -->
    <ul>
			<li v-for="(item, index) in data" :key="index">
					<slot :row="item" :$index="index"></slot>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	}
}
</script>
```

## 注意事项

1. 匿名插槽和具名插槽可以同时使用
2. 具名插槽和带数据插槽可以同时使用
3. 匿名插槽和带数据插槽不能同时使用

