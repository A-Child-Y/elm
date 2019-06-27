<template>
  <div class="footBar">
    <mt-tabbar v-model="bar" :fixed='true'>
      <mt-tab-item id="home" @click.native="$router.push({name:bar})">
        <img slot="icon" src="../../assets/home.png" v-show="bar != 'home'">
        <img slot="icon" src="../../assets/home-selected.png" v-show="bar == 'home'">
        首页
      </mt-tab-item>
      <mt-tab-item id="find" @click.native="$router.push({name:bar})">
        <img slot="icon" src="../../assets/find.png" v-show="bar != 'find'">
        <img slot="icon" src="../../assets/find-selected.png" v-show="bar == 'find'">
        发现
      </mt-tab-item>
      <mt-tab-item id="order" @click.native="$router.push({name:bar})">
        <img slot="icon" src="../../assets/order.png" v-show="bar != 'order'">
        <img slot="icon" src="../../assets/order-selected.png" v-show="bar == 'order'">
        订单
      </mt-tab-item>
      <mt-tab-item id="mine" @click.native="$router.push({name:bar})">
        <img slot="icon" src="../../assets/mine.png" v-show="bar != 'mine'">
        <img slot="icon" src="../../assets/mine-selected.png" v-show="bar == 'mine'">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
    props:['selected'],
    data() {
        return {
            bar: this.selected
        };
    }
};
</script>


<style scoped>

</style>
