<!--
 * @Author: larassa
 * @Date: 2021-04-25 15:55:08
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-26 16:16:55
 * @Description: select 下拉框
-->
<template>
  <div>
    <el-select v-model="valueCum">
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
  name: 'Select1',
  props: [ 'value', 'optionsList' ],
  data() {
    return {
    }
  },
  computed: {
    valueCum: {
      set: function(e) {
        console.log('当前组件的parent', this.$parent)
        console.log('当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的', this.$children)
        console.log('当前组件的root', this.$root)
        this.$emit('change',e)
      },
      get: function() {
        return this.value
      }
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
