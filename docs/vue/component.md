
# 组件间通信

## 父子组件

> 父组件先将子组件引入并注册，在子组件上通过v-bind自定义传值的名称，v-on自定义接收子组件触发的方法

父组件

```vue
<template>
	<div>
    <child  :msg=msg @childClick="childClick"></child>
  </div>
</template>
<script>
  import child from './child'
	export default {
    name: 'parent',
    components: {
      child
    },
    data() {
      return {
        msg: 'parent'
      }
    },
    methods: {
      childClick(param) {
        this.msg = param
      }
    }
  }
</script>
```

> 子组件在props接收负组件传过来的值，通过$emit触发向父组件传值

子组件

```vue
<template>
	<div>
    <div @click="childClick">{{ msg }}</div>
  </div>
</template>
<script>
	export default {
    name: 'child',
    props: {
      msg: {
        type: String,
        default: null
      },
    },
    methods: {
      childClick() {
        this.$emit( 'childClick', 'child' )
      }
    }
  }
</script>
```

扩展

> 父组件通过slot插槽内容分发向子组件传值，具体使用可以前往[插槽](/vue/slot)

## 兄弟组件

## 爷孙组件