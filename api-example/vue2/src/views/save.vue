<!--
 * @Author: larassa
 * @Date: 2021-05-10 13:07:31
 * @LastEditors: larassa
 * @LastEditTime: 2021-05-10 15:35:46
 * @Description: 前端安全
-->
<template>
  <div>
    <li>xss攻击</li>
    <el-input v-model="value1" @keypress.enter.native="blur1"></el-input>
    <!-- <li>输入：</li>
    <p>{{ value1 }}</p>
    <div v-html="src"></div> -->
    <!-- <div v-for="item in value1List" :key="item">{{ item }}</div> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      value1: "<img src='../ww.png' onerror='alert(1)'/>",
      value1List: [],
      src: "<img src='../ww.png' onerror='alert(1)'/>"
    }
  },
  created() {
    // this.value1List = sessionStorage.getItem('value1List') ? JSON.parse(sessionStorage.getItem('value1List')): []
    // this.value1 = sessionStorage.getItem('value1') ? JSON.parse(sessionStorage.getItem('value1'))  : ''
  },
  mounted() {

  },
  methods: {
    blur1(e) {
      // this.value1List.push(this.value1)
      // sessionStorage.setItem('value1List', JSON.stringify(this.value1List))
      // sessionStorage.setItem('value1', JSON.stringify(this.value1))
      // this.value1 = ''
      // this.$http({
      //   url: '/safe',
      //   method: 'get',
      //   params: { ky: this.value1 }
      // }).then(res => {

      // })
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
