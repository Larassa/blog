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
import SideBar from './SideBar.vue'

export default {
  name: 'Layout',
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

<style scoped lang="scss">
.container {
  .wrap {
    display: flex;
  }
  .flex-box {
    flex: 1;
    overflow-x: hidden;
    margin-left: 30px
  }
}

</style>
