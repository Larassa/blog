<!-- 侧边栏 -->
<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <side-bar-item
        v-for="item in routerList"
        :key="item.route"
        :item="item"
      ></side-bar-item>
    </el-menu>
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem.vue";
import { routerList } from "../utils/routerList";

export default {
  name: "SideBar",
  components: {
    SideBarItem
  },
  data() {
    return {
      isCollapse: false,
      activeMenu: "DashBoard"
    };
  },
  computed: {
    routerList() {
      return routerList;
    }
  },
  created() {
    this.getRouteList();
  },
  mounted() {},
  methods: {
    getRouteList() {
      let index = this.$route.name.indexOf("Detail");
      let active = this.$route.name;
      if (index != -1) {
        active = this.$route.name.substring(0, index);
      }
      this.activeMenu = active;
    }
  }
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
