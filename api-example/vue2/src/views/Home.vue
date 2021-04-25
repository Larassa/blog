<!--
 * @Author: your name
 * @Date: 2021-04-08 11:00:05
 * @LastEditTime: 2021-04-25 09:35:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \larassa-blog\api-example\vue2\src\views\Home.vue
-->
<template>
  <div class="home">
    home
		<!-- <li v-for="item in list" :key="item.name">{{ item.name }}</li> -->
  </div>
</template>

<script>
export default {
  name: "Home",
	data() {
		return {
			list: []
		}
	},
  created() {
    // this.$http({
    // 	url: 'b',
    // 	method: ''
    // }).then(res => {
		// 	console.log('res', res)
		// 	this.list = res
    // })
  }
};
</script>
