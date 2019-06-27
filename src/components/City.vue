<template>
  <div class="city-boss">
    <backbar :name="'城市选择'" :address="'address'"></backbar>
    <div class="city">
      <div class="search">
        <img src="../assets/search.png" alt>
        <input v-model="val" type="text" placeholder="输入城市名或拼音" @input="changeImg()">
      </div>
    </div>
    <nonebar :displayNone='isNone == true ? "display:block": "display:none"'></nonebar>
    <footbar :selected="'home'"></footbar>
  </div>
</template>

<script>
import footbar from "./common/footBar";
import backbar from "./common/backBar";
import nonebar from "./common/none";
export default {
  components: {
    footbar,
    backbar,
    nonebar
  },
  data() {
    return {
      isNone: false,
      val:''
    };
  },
  methods: {
    changeImg: function() {
      this.isNone = true;
      if (this.val == "") {
        this.isNone = false;
      }
    }
  }
};
</script>

<style scoped>
html {
  height: 100%;
}
.city-boss {
  background-color: #f6f6f6;
  height: 100%;
}
.city {
  height: 33px;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  /* background-color: #000; */
  padding: 8px;
  text-align: center;
}
.search {
  margin-top: 5px;
  background-color: #fff;
  display: inline-block;
  height: 28px;
  width: 90%;
  line-height: 28px;
  border-radius: 40px;
  position: relative;
}
.search img {
  position: absolute;
  width: 18px;
  height: 18px;
  top: calc((100% - 18px) / 2);
  left: 10px;
}
.search input {
  top: calc((100% - 17px) / 2);
  left: 30px;
  background-color: #fff;
  border: none;
  outline: none;
  position: absolute;
}
</style>
