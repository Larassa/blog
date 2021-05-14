<!--
 * @Author: larassa
 * @Date: 2021-05-06 14:57:58
 * @LastEditors: larassa
 * @LastEditTime: 2021-05-14 16:57:51
 * @Description: file content
-->
<!-- -->
<template>
  <div class="container">
    <SideBar></SideBar>
    <div class="flex-box">
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
import SideBar from '@/components/SideBar'

export default {
  components: {
    SideBar
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  .flex-box {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
  }
}
</style>
