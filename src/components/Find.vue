<template>
  <div class="find">
    <div v-show="!userId" class="orderNone">
      <infonone :h3="'登录后查看发现'" :button='"立即登录"'></infonone>
    </div>
      <div v-show="userId" class="orderNone">
      <infonone :h3="'暂无发现'"></infonone>
    </div>
    <footbar :selected="'find'"></footbar>
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
html,
body {
  height: 100%;
}
.find {
  background-color: #f6f6f6;
  height: 100%;
}
.orderNone {
  position: relative;
  top: 20%;
}
</style>





