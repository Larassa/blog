<!--
 * @Author: larassa
 * @Date: 2021-04-26 15:44:43
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-26 16:16:36
 * @Description: file content
-->
<template>
  <div>
    <el-option v-for="item in optionsList"  :key="item.value" :label="item.label"  :value="item.value"></el-option>
  </div>
</template>

<script>

export default {
  name: 'Option',
  inject: ['optionsList'],
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

</style>
