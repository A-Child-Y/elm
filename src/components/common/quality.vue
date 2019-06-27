<template>
  <div id="quality-swipe">
    <div class="quality">
      <div>
        <h3>品质套餐</h3>
        <div>搭配齐全吃得好</div>
        <div>立即抢购 ></div>
      </div>
      <div>
        <img src="../../assets/quality.png" alt>
      </div>
    </div>

    <div class="swipe">
      <mt-swipe :auto="4000" :continuous="true" style="height:100px">
        <mt-swipe-item>
            <img src="../../assets/one.jpeg" alt="" class="image">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/two.jpeg" alt="" class="image">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/three.jpeg" alt="" class="image">
        </mt-swipe-item>
      </mt-swipe>
      <div class="logo">
          资质证照
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
#quality-swipe {
  padding: 0 10px;
}
.quality {
  display: flex;
  background-color: #f8f8f8;
  margin-bottom: 10px;
}
.quality > div:nth-of-type(1) {
  width: 48%;
  margin-top: 10px;
  margin-left: 10px;
}
.quality > div h3 {
  color: #333;
  font-size: 17px;
  margin: 6px 0;
}
.quality > div div:nth-of-type(1) {
  display: block;
  color: #777;
  font-size: 13px;
  margin: 6px 0;
}
.quality > div div:nth-of-type(2) {
  display: block;
  color: #af8260;
  font-weight: 700;
  font-size: 12px;
  margin: 6px 0;
}
.quality > div:nth-of-type(2) {
  margin-top: 10px;
  width: 48%;
  text-align: center;
}
.quality > div:nth-of-type(2) img {
  width: 88%;
}
.swipe{
    position: relative;
}
.image{
    height: 100px;
    width: 100%;
}
.logo{
    position: absolute;
    right: 2px;
    bottom: 3px;
    color: #fff;
    font-size: 5px;
    background-color: rgba(0,0,0,.5);
    width: 60px;
    text-align: center;
    height: 20px;
    line-height: 20px;
    border-radius: 50px;
}
</style>
