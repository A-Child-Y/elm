<template>
  <div class="swipe">
    <mt-swipe :auto="0" :continuous="true" style="height:165px">
      <mt-swipe-item>
        <div class="swiper">
          <div v-for="(item, index) in entriesOne" :key="index">
            <img :src="item.image_hash | changeImg" alt>
            <span>{{item.name}}</span>
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="swiper">
          <div v-for="(item, index) in entriesTwo" :key="index">
            <img :src="item.image_hash | changeImg" alt>
            <span>{{item.name}}</span>
          </div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entriesOne: [],
      entriesTwo: []
    };
  },
  created() {
    let self = this;
    this.$axios
      .get(
        "/api/restapi/shopping/v2/entries?latitude=34.763461&longitude=113.706008&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5"
      )
      .then(function(res) {
        self.entriesOne = res.data[0].entries.slice(0, 10);
        self.entriesTwo = res.data[0].entries.slice(10);
      });
  },
};
</script>

<style scoped>
.swipe {
  background-color: #fff;
}
.swiper {
  display: flex;
  flex-flow: wrap;
  align-content: center;
  padding: 7px;
}
.swiper div {
  margin: 2.5px 0;
  width: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.swiper span {
  font-size: 13px;
  color: #515151;
}
.swiper img {
  width: 40px;
  height: 40px;
  position: relative;
  left: 25%;
}
</style>
