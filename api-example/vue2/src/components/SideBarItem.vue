<!-- -->
<template>
  <div>
    <template v-if="!item.children">
      <el-menu-item
        :index="item.route"
        @click="goLink(item)"
        v-if="!item.children"
      >
        <i :class="setClass(item.icon)"></i>
        <span slot="title" class="mar-lft-10">{{ item.name }}</span>
      </el-menu-item>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.route" popper-append-to-body>
      <template slot="title">
        <i :class="setClass(item.icon)"></i>
        <span slot="title" class="mar-lft-10">{{ item.name }}</span>
      </template>
      <SideBarItem
        v-for="child in item.children"
        :key="child.route"
        :item="child"
        :route="child.route"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    goLink(item) {
      if (this.$route.name == item.route) return;
      this.$router.push({ name: item.route });
    },
    setClass(icon) {
      let obj = { iconfont: true };
      obj[`${icon}`] = true;
      return obj;
    }
  }
};
</script>

<style scoped lang="scss"></style>
