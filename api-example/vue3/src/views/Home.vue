<!--
 * @Author: larassa
 * @Date: 2021-04-06 11:32:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 15:32:36
 * @Description: file content
-->
<template>
  <div class="home">
    aaaaaaa
    <p @click="changeValue">{{ value }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      temp: 'temp',
    };
  },
  setup(props) {
    const value = ref(1);
    const changeValue = () => {
      console.log(value);
      value.value += 1;
    };
    return {
      value,
      changeValue,
    };
  },
  methods: {
    click() {},
  },
};
</script>

<style scoped lang="scss">
.home {
  background: #f4f4f4;
  padding: 20px;
  height: 100%;
}
</style>
