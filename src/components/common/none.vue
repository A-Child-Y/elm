<template>
  <div>
    <div class="none-gif"  :style="displayNone">
      <img src="../../assets/bcLogo.gif" alt="">
      <h3>没有搜索结果</h3>
      <span>换个关键字试试</span>
    </div>
  </div>
</template>

<script>
export default {
    props:['displayNone']
};
</script>

<style scoped>
.none-gif{
    text-align: center;
}
.none-gif img{
    width: 200px;
    height: 200px;
    margin: 0 auto;
    display: block;
    margin-top: 160px;
}
.none-gif h3{
    color: #6a6a6a;
    font-weight: 400;
    font-size: 17px;
    margin: 5px 0 3px 0;
}
.none-gif span{
    color: #999;
    font-size: 10px;
}
</style>
