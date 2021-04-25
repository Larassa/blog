<!--
 * @Author: larassa
 * @Date: 2021-04-25 09:22:35
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-25 16:02:50
 * @Description: 组件通信
-->

<template>
  <div>
    <p>props传参  父传子props  子传父$emit</p>
    <Select1 :value="select.value" :optionsList="select.list" @change="change1"></Select1>
    <p>非props: 父传子$attrs 子传父$listeners</p>
    <Select :select="select" @change="change"></Select>
  </div>
</template>

<script>
import Select from '@/components/Select'
import Select1 from '@/components/Select1'

export default {
  name: 'ComponentProps',
  components: {
    Select,
    Select1
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
      }
      
    }
  },
  created() {
  },
  mounted() {

  },
  methods: {
    change(e) {
      this.select.value = e
    },
    change1(e) {
      this.select.value = e
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
