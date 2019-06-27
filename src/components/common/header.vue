<template>
  <div class="header">
    <div class="address" @click="$router.push({name:'address'})">
      <img src="../../assets/address.png" alt>
      <span>{{name | strSub}}</span>
      <img src="../../assets/down.png" alt>
    </div>
    <div class="fixed" :class="isFixed == true ? 'start-fixed': ''">
      <a href="#">
        <img src="../../assets/search.png" alt>
        <span>搜索饿了么商家、商品名称</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      isFixed: false
    };
  },
  created() {
    let self = this;
    this.$axios
      .get(
        "/api/restapi/bgs/poi/reverse_geo_coding?latitude=34.763461&longitude=113.706008"
      )
      .then(function(res) {
        self.name = res.data.name;
      });
  },
  
  activated(){
    window.addEventListener("scroll", this.changeLoad)
  },
  deactivated() {
    window.removeEventListener("scroll", this.changeLoad);
  },
  methods: {
    changeLoad() {
      let self = this;
      let c =
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;
      if (c > 90) {
        self.isFixed = true;
      } else {
        self.isFixed = false;
        console.log(123, '---')
      }
    }
  }
};
</script>

<style scoped>
.header {
  height: 90px;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.address {
  padding: 7px;
  position: relative;
  height: 30px;
}
.address img:nth-of-type(1) {
  width: 20px;
  height: 20px;
  position: absolute;
  top: calc((100% - 20px) / 2);
  left: 10px;
}
.address span {
  position: absolute;
  left: 35px;
  font-size: 17px;
  color: #fff;
  top: calc((100% - 25px) / 2);
  font-weight: bold;
}
.address img:nth-of-type(2) {
  width: 10px;
  height: 10px;
  position: absolute;
  left: 198px;
  top: calc((100% - 15px) / 2);
}
.fixed {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  z-index: 99;
  height: 48px;
  position: relative;
}
.start-fixed {
  position: fixed;
  width: 100%;
  top: 0;
}
a {
  display: block;
  width: 92%;
  height: 35px;
  background-color: #fff;
  text-decoration: none;
  color: #8c8c8c;
  line-height: 35px;
  text-align: center;
  font-size: 15px;
  position: absolute;
  top: calc((100% - 35px) / 2);
  left: calc((100% - 92%) / 2);
}
a:hover {
  color: #8c8c8c;
  -webkit-tap-highlight-color: transparent;
}

a img {
  width: 20px;
  height: 20px;
  position: relative;
  top: calc((100% - 25px) / 2);
}
</style>


