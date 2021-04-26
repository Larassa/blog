<!--
 * @Author: larassa
 * @Date: 2021-04-25 09:22:35
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-26 16:56:09
 * @Description: 组件通信
-->

<template>
  <div>
    <li>props传参  父传子props  子传父$emit</li>
    <Select1 :value="select.value" :optionsList="select.list" @change="change"></Select1>
    <li>非props: 父传子$attrs 子传父$listeners</li>
    <Select :select="select" @change="change"></Select>
    <li>获取组件实例： $parent  $children $root(打开控制台查看输出)</li>
    <Select1 :value="select.value" :optionsList="select.list" @change="change"></Select1>
    <li>深入穿透：provide / inject（provide 和 inject 绑定并不是可响应的。如果传入的是一个可监听的对象，那么其对象的 property 还是可响应的。）（<a href="https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html" >vue3 是响应式的</a>）</li>
    <Select2 :value="select.value" @change="change"></Select2>
    <li>插槽</li>
    <SlotCom :optionsList="select.list">
      <span slot="type">(slot type)</span>
    </SlotCom>
    <li>vuex</li>
  </div>
</template>

<script>
import Select from '@/components/select/Index'
import Select1 from '@/components/select/Index1'
import Select2 from '@/components/select/Index2'

import SlotCom from '@/components/slot/Index'

export default {
  name: 'ComponentProps',
  provide() {
    return {
      optionsList: this.select.list // 传入可监听的对象值就是响应式的
    }
  },
  components: {
    Select,
    Select1,
    Select2,
    SlotCom
  },
  data() {
    return {
      select: {
        value: 1,
        list: [
          { label: 'banana', value: 1 },
          { label: 'apple', value: 2 },
          { label: 'pear', value: 3 }
        ]
      },
    }
  },
  created() {
  },
  mounted() {

  },
  methods: {
    change(e) {
      this.select.value = e
      this.select.list.push({
        label: `test${this.select.list.length+1}`, value: this.select.list.length+1
      })
    },
  }
}
</script>

<style scoped lang='scss'>
li {
  margin: 15px 0
}
</style>
