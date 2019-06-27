<template>
    <div class="log-bar" @click="$router.push({name:address})">
        <div class="log">
            <div>
                <img src="../../assets/ele-logo.png" alt="" v-show="user.isId == false">
                <img src="../../assets/ele-logo.png" alt="" v-show="user.isId == true && !user.userImg ">
                <img :src="user.userImg | changeImg" alt="" v-show="user.isId == true && user.userImg ">
            </div>
            <div>
                <h3 v-show="user.isId == false">登录/注册</h3>
                <h3 v-show="user.isId == true">{{user.userName}}</h3>
                <img src="../../assets/phone.png" alt="">
                <span v-show="user.isId == false">登录后享受更多特权</span>
                <span v-show="user.isId == true">{{user.userPhone | changePhone}}</span>
            </div>
             <div><img src="../../assets/white-arrow.png" alt=""></div>
        </div>
    </div>
</template>


<script>
export default {
    props:['user', 'address'],
}
</script>

<style scoped>
.log-bar{
    height: 110px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
}
.log{
    display: flex;
    align-items: center;
    height: 110px;
    position: relative;
}
.log div:nth-of-type(1){
    position: absolute;
    left: 20px;
}
.log div:nth-of-type(1) img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.log div:nth-of-type(2){
    position: absolute;
    left: 95px;
    color: #fff;
    line-height: 28px;
    width: 130px;
}
.log div:nth-of-type(2) img{
    width: 11px;
    height: 11px;
}
.log div:nth-of-type(2) span{
    font-size: 12px;
    position: absolute;
    bottom: -1px;
}
h3{
    font-size: 21px;
}
.log div:nth-of-type(3){
    position: absolute;
    right: 13px;
}
.log div:nth-of-type(3) img{
    width: 12px;
    height: 12px;
}
</style>
