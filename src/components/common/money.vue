<template>
    <div>
        <div class="money">
            <div><div><img src="../../assets/red.png" alt=""><div>红包</div></div></div>
            <div><div><img src="../../assets/green.png" alt=""><div>金币</div></div></div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>

.money{
    display: flex;
    background-color: #fff;
    height: 80px;
}
.money > div{
    width: 50%;
    text-align: center;
    height: 80px;
    position: relative;
}

.money > div > div{
    position: absolute;
    top: calc((100% - 45px) / 2);
    left: calc((100% - 25px) / 2);
}
.money > div img{
    width: 25px;
    height: 25px;
}
.money > div > div div{
    font-size: 12px;
    font-weight: 700;
    color: #666;
}
.money > div:nth-of-type(1){
    border-right: 1px solid #f0f0f0;
}
</style>
