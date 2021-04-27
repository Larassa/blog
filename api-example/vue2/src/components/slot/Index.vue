<!--
 * @Author: larassa
 * @Date: 2021-04-26 16:21:20
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-27 11:19:12
 * @Description: file content
-->
<template>
  <div>
    <li v-for="item in optionsList" :key="item.value">
      <slot></slot>
      {{ item.label }}
      <slot name="slotType"></slot>
      <slot :row="item"></slot>
      <slot name="item" :item="item"></slot>
      <slot name="item1" :item="item"></slot>
    </li>
  </div>
</template>

<script>

export default {
  props: ['optionsList'],
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
li {
  list-style-type: disclosure-closed;
}
li::marker {
  color: #00b7a8; 
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
