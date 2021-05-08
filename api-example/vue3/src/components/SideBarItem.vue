<!--
 * @Author: larassa
 * @Date: 2021-05-08 16:00:58
 * @LastEditors: larassa
 * @LastEditTime: 2021-05-08 17:34:02
 * @Description: file content
-->
<!-- -->
<template>
  <div>
    <template v-if="!item.children">
      <el-menu-item
        :index="item.route"
        @click="goLink(item)"
        v-if="!item.children"
      >
        <template #title>
          <i :class="setClass(item.icon)"></i>
          <span class="mar-lft-10">{{ item.name }}</span>
        </template>
      </el-menu-item>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.route" popper-append-to-body>
      <template #title>
        <i :class="setClass(item.icon)"></i>
        <span class="mar-lft-10">{{ item.name }}</span>
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
