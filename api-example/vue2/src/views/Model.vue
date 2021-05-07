<!--
 * @Author: larassa
 * @Date: 2021-04-27 11:31:13
 * @LastEditors: larassa
 * @LastEditTime: 2021-05-07 10:44:00
 * @Description: 双向绑定
-->
<template>
  <div>
    <li>双向绑定失效</li>
    <el-select v-model="form.select">
      <el-option v-for="item in optionsList" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <li>自定义组件实现双向绑定</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: 'qqqq'
      },
      optionsList: [
        { label: 'aaaa', value: 2 },
        { label: 'bbbb', value: 1 },
        { label: 'cccc', value: 3 },
        { label: 'dddd', value: 4 },
      ]
    }
  },
  created() {
    setTimeout(() => {
      this.form.select = 1
    }, 3000)
    
  },
  mounted() {
  },
  methods: {
  }
}
</script>


<style scoped lang='scss'>
li {
  margin: 15px 0
}
</style>
