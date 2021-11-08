<!--
 * @Author: your name
 * @Date: 2021-04-08 11:00:05
 * @LastEditTime: 2021-09-30 17:42:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \larassa-blog\api-example\vue2\src\views\Home.vue
-->
<template>
  <div class="home">
    home
    <!-- <li v-for="item in list" :key="item.name">{{ item.name }}</li> -->
    <div>{{ list }}</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [],
    };
  },
  created() {
    // this.$http({
    // 	url: 'api/v2/admin/refundlist',
    // 	method: 'get',
    //   params: {
    //     order_no: '',
    //     type: '',
    //     status: '',
    //     offset: 1,
    //     limit: 10,
    //     order_name: 'created_at',
    //     order_type: 'desc',
    //   }
    // }).then(res => {
    // 	console.log('res', res)
    // 	this.list = res
    // })
  },
};
</script>
