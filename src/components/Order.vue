<template>
  <div class="order">
    <div v-show="!userId" class="orderNone">
      <infonone :h3="'登录后查看外卖订单'" :button="'立即登录'"></infonone>
    </div>
    <div v-show="userId" class="orderNone">
      <infonone :h3="'暂无外卖订单'"></infonone>
    </div>
    <footbar :selected="'order'"></footbar>
  </div>
</template>

<script>
import footbar from "../components/common/footBar";
import infonone from "../components/common/infoNone";
import { mapGetters } from "vuex";
export default {
  components: {
    footbar,
    infonone
  },
  computed: {
    ...mapGetters({
      userId: "getUserId"
    })
  }
};
</script>

<style scoped>
html {
  height: 100%;
}
.order {
  background-color: #f6f6f6;
  height: 100%;
}
.orderNone {
  position: relative;
  top: 20%;
}
</style>
