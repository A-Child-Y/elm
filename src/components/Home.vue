<template>
  <div class="home">
    <headerbar></headerbar>
    <swipe></swipe>
    <quality></quality>
    <homecontent></homecontent>
    <footbar :selected="'home'"></footbar>
    <div class="top"></div>
  </div>
</template>

<script>
import footbar from "../components/common/footBar";
import headerbar from "../components/common/header";
import swipe from "../components/common/swipe";
import homecontent from "../components/common/content";
import quality from "../components/common/quality";
export default {
  data() {
    return {};
  },
  components: {
    footbar,
    headerbar,
    swipe,
    quality,
    homecontent
  },
};
</script>

<style scoped>
.top {
  margin-top: 25px;
  height: 40px;
}
</style>
