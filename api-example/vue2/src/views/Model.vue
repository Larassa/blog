<!--
 * @Author: larassa
 * @Date: 2021-04-27 11:31:13
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-27 17:39:57
 * @Description: 双向绑定
-->
<template>
  <div>
    <h1>自定义组件实现双向绑定</h1>
    <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
  </div>
</template>

<script>


export default {
  data() {
    return {
      percentage: 0,
      timer: null
    }
  },
  created() {
    this.timer = setInterval(() => {
      if(this.percentage == 100) return
      this.percentage++
    }, 100)
  },
  mounted() {
    setTimeout(() => {
      this.percentage = 100
    }, 5000)
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399';
      } else if (percentage < 70) {
        return '#e6a23c';
      } else {
        return '#67c23a';
      }
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
