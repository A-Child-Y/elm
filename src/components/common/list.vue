<template>
  <div class="list">
    <div class="item" v-for="(item, index) in lists" :key="index">
      <img :src="item.img | changeImg" alt>
      <div class="item-border">
        <span>{{item.name}}</span>
        <img :src="item.arrow | changeImg" alt>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      lists: [
        { img: "bule-address", name: "我的地址", arrow: "bbb-arrow" },
        { img: "mall", name: "金币商城", arrow: "bbb-arrow" },
        { img: "gift", name: "分享拿20元现金", arrow: "bbb-arrow" },
        { img: "customer-service", name: "我的客服", arrow: "bbb-arrow" },
        { img: "logo", name: "下载饿了么APP", arrow: "bbb-arrow" },
        { img: "document", name: "规则中心", arrow: "bbb-arrow" }
      ]
    };
  },
  filters: {
    changeImg: function(e) {
      return "../../../static/" + e + ".png";
    }
  }
};
</script>

<style scoped>
.item:nth-of-type(1) {
  margin: 10px 0;
}
.item:nth-of-type(3) {
  margin-bottom: 10px;
}
.item {
  display: flex;
  background-color: #fff;
  align-items: center;
  height: 45px;
}
.item > img:nth-of-type(1) {
  width: 20px;
  height: 20px;
  margin-left: 15px;
}


.item-border {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #f6f6f6;
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
}
.item-border img {
  position: absolute;
  right: 13px;
  width: 12px;
  height: 12px;
  top: calc((100% - 12px) / 2);
}
.item-border span {
  font-size: 16px;
  color: #333;
}
</style>
