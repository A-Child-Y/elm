<template>
  <div>
    <div class="star">
      <span v-for="(item,index) in itemClasslass" class="star-item" :key="index" :class="item"></span>
      <span class="score">{{score}}</span>
      <span class="sale">月售{{recentOrderNum}}单</span>
      <span class="send">{{text}}</span>
    </div>
  </div>
</template>


<script>
export default {
  props:['score', 'recentOrderNum', 'text'],
  data() {
    return {
    };
  },
  computed: {
    itemClasslass() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let starhalf = score % 1 != 0 ? true : false;

      let fullstar = Math.floor(score);
      for (var i = 0; i < fullstar; i++) {
        result.push("on");
      }
      if (starhalf) {
        result.push("half");
      }
      if (result.length < 5) {
        var offstar = 5 - result.length;
        for (var i = 0; i < offstar; i++) {
          result.push("off");
        }
      }
      return result;
    }
  }
};
</script>

<style scoped>
.star {
  display: flex;
  justify-content: start;
  position: relative;
  margin: 5px 0;
  align-items: center;
}
.star-item {
  width: 10px;
  height: 10px;
  margin: 0 1px;
}
.on {
  background: url("../../../static/half.png") center center no-repeat;
  background-size: contain;
}
.half {
  background: url("../../../static/on.png") center center no-repeat;
  background-size: contain;
}
.off {
  background: url("../../../static/off.png") center center no-repeat;
  background-size: contain;
}
.score {
  margin: 0 5px;
  font-size: 10px;
  color: #666;
}
.sale {
  font-size: 10px;
  margin: 0 3px;
  color: #666;
}
.send {
  position: absolute;
  right: 5px;
  font-size: 10px;
  background-color: #0af;
  color: #fff;
  border-radius: 2px;
}
</style>

