<!--
 * @Author: larassa
 * @Date: 2021-04-25 15:55:08
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-25 16:56:18
 * @Description: file content
-->
<!-- -->
<template>
  <div>
    <el-select v-model="valueCum" @change="change">
      <el-option 
        v-for="item in optionsList" 
        :key="item.value" 
        :label="item.label" 
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>

export default {
  props: [ 'value', 'optionsList' ],
  data() {
    return {
    }
  },
  computed() {
    
  },
  created() {

  },
  mounted() {

  },
  methods: {
    change(e) {
      this.$emit('change1', e)
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
