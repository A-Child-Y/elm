<template>
  <div>
    <div class="recommend">
        —&nbsp;&nbsp;推荐商家&nbsp;&nbsp;—</div>
    <div class="tab-title">
      <div class="img" :class="{'activeImg': con[0].isActive}" @click="changeDiv(con[0])">
          综合排序
        <img src="../../assets/arrow.png" alt v-show="con[0].isActive == false">
        <img src="../../assets/arrow-selected.png" alt v-show="con[0].isActive != false">
      </div>
      <div :class="{'active':con[1].isActive}"  @click="changeDiv(con[1])">距离最近</div>
      <div :class="{'active':con[2].isActive}"  @click="changeDiv(con[2])">品质联盟</div>
      <div class="img" :class="{'activeImg': con[3].isActive}" @click="changeDiv(con[3])">
        筛选
        <img src="../../assets/filter.png" alt v-show="con[3].isActive == false">
        <img src="../../assets/filter-selected.png" alt v-show="con[3].isActive != false">
      </div>
    </div>
    <infonone v-show="!userId" :h3='"没有结果"' :span='"登录后查看更多商家"' :button='"登录"'></infonone>
    <shoplist v-show="userId"></shoplist>
  </div>
</template>

<script>
import infonone from './infoNone'
import {mapGetters} from 'vuex'
import shoplist from './shopList'
export default {
  computed:{
    ...mapGetters({
      userId:'getUserId'
    })
  },
  data() {
    return {
        con:[
            {'isActive':false},
            {'isActive':false},
            {'isActive':false},
            {'isActive':false}
            ]
        
    };
  },
  methods: {
      changeDiv:function(e){
          e.isActive =! e.isActive
      }
  },
  components:{
      infonone,
      shoplist
  }
};
</script>

<style scoped>
.recommend {
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #333;
  margin: 10px;
}
.tab-title {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  color: #666;
  font-size: 15px;
}

.img:nth-of-type(1) img {
  width: 10px;
  height: 10px;
  position: relative;
  top: -10%;
}
.img img {
  width: 15px;
  height: 15px;
  position: relative;
  top: 10%;
}
.activeImg{
    color: #3190e8;
    font-weight: 700;
}
.active {
  color: #333;
  font-weight: 700;
}
</style>
