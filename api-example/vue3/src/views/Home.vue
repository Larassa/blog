<!--
 * @Author: larassa
 * @Date: 2021-04-06 11:32:04
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-26 16:54:39
 * @Description: file content
-->
<template>
  <div class="home">
    home
    <HelloWorld msg="Welcome to Your Vue.js App" status='status' class="hello-world" @click="click"/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    click() {}
  }
};
</script>
