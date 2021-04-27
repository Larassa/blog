<!--
 * @Author: larassa
 * @Date: 2021-03-01 11:42:24
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-27 10:23:04
 * @Description: file content
-->
<!-- 整体布局 -->
<template>
  <div class="container">
    <div class="wrap">
      <side-bar></side-bar>
      <div class="flex-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";

export default {
  name: "Layout",
  components: {
    SideBar
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.container {
  .wrap {
    display: flex;
    height: 100vh;
  }
  .flex-box {
    flex: 1;
    overflow-x: hidden;
    margin-left: 30px;
  }
}
</style>
