<!--
 * @Author: larassa
 * @Date: 2021-04-26 14:03:26
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-26 16:16:46
 * @Description: file content
-->
<template>
  <div>
    <el-select v-model="valueCum">
      <Option></Option>
    </el-select>
  </div>
</template>

<script>
import Option from './Option'
export default {
  name: 'Select2',
  components: {
    Option
  },
  props: ['value'],
  data() {
    return {
    }
  },
  computed: {
    valueCum: {
      set: function(e) {
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

