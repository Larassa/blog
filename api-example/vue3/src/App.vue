<!--
 * @Author: larassa
 * @Date: 2021-04-06 11:32:04
 * @LastEditors: larassa
 * @LastEditTime: 2021-05-14 16:58:22
 * @Description: file content
-->
<template>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

div {
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
