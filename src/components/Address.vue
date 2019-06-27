<template>
  <div class="address">
    <backbar :name="'选择收货地址'" :address="'home'"></backbar>
    <div class="city">
        <div class="chose" @click="$router.push({name:'city'})">
            <span>{{ city | strSub}}</span>
            <img src="../assets/arrow.png" alt="">
        </div>
        <div class="search">
            <img src="../assets/search.png" alt="">
            <input v-model="val" type="text" name="" id="" placeholder="请输入地址" @input="changeImg()"> 
        </div>
        <nonebar :displayNone='isNone == true ? "display:block": "display:none" '></nonebar>
    </div>
    <footbar :selected="'home'"></footbar>
  </div>
</template>

<script>
import footbar from "./common/footBar";
import backbar from './common/backBar';
import nonebar from './common/none';
export default {
  components: {
    footbar,
    backbar,
    nonebar
  },
  created(){
      console.log(process.env.API_HOST, '456')
  },
  filters:{
      strSub:function(e){
          return e.substring(0, 2) + '...'
      }
  },
  data() {
      return {
          city: '选择城市',
          isNone:false,
          val:''
      }
  },
  methods:{
      changeImg:function(){
          this.isNone = true
          if(this.val == ''){
              this.isNone = false;
          }
      }
  }
};
</script>

<style scoped>
html{
    height: 100%;
}
.address{
    background-color: #f6f6f6;
    height: 100%;
}
.city{
    height: 40px;
    background-color: #fff;
    padding: 8px;
    position: relative;
}
.chose{
    display: inline-block;
    height: 38px;
    width: 65px;
    line-height: 38px;
    position: relative;
}
.chose img{
    width: 12px;
    height: 12px;
    position: absolute;
    top: calc((100% - 15px) / 2);
    right: 0px;
}
.chose span{
    font-size: 10px;
    position: absolute;
    left: calc((100% - 35px) / 2);
    top: calc((100% - 40px) / 2);
    color: #333;
}
.search{
    background-color: #f6f6f6;
    display: inline-block;
    height: 38px;
    width: 75%;
    line-height: 38px;
    position: absolute;
    top: 8px;
    right: 10px;
}
.search img{
    position: absolute;
    width: 20px;
    height: 20px;
    top: calc((100% - 20px) / 2);
    left: 2px;
}
.search input{
    position: absolute;
    top: calc((100% - 17px) / 2);
    left: 25px;
    background-color: #f6f6f6;
    border: none;
    outline: none;
}
</style>
