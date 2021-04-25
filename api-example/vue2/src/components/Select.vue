<!--
 * @Author: larassa
 * @Date: 2021-04-25 15:21:30
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-25 15:25:38
 * @Description: file content
-->
<template>
  <el-select v-model="$attrs.select.value" @change="$listeners.change">
    <el-option 
      v-for="item in $attrs.select.list" 
      :key="item.value" 
      :label="item.label" 
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>

</style>