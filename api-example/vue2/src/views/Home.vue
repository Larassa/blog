<template>
  <div class="home">
    home
		<li v-for="item in list" :key="item.name">{{ item.name }}</li>
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
    this.$http({
    	url: 'b',
    	method: ''
    }).then(res => {
			console.log('res', res)
			this.list = res
    })
  }
};
</script>
