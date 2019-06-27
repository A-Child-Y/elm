<template>
    <div>
        <div class="bar">
            <img src="../../assets/leftBack.png" alt="" @click="$router.push({name:address})">
            <span>{{name}}</span>
        </div>
    </div>
</template>


<script>
export default {
    props:['name', 'address'],
    data(){
        return{
        }
    }
}
</script>


<style scoped>
.bar{
    height: 45px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    position: relative;
    text-align: center;
    line-height: 45px;
}
.bar img{
    width: 24px;
    height: 24px;
    position: absolute;
    top: calc((100% - 24px) / 2);
    left: 10px;
}
.bar span{
    color: #fff;
    font-size: 18px;
}
</style>
