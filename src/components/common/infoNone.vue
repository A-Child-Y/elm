<template>
    <div>
        <section>
            <img src="../../assets/nologin.png" alt="">
            <h3>{{h3}}</h3>
            <span>{{span}}</span>
            <button :class="userId? 'button-null':''" @click="$router.push({name:'login'})">{{button}}</button>
        </section>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
    props:['h3', 'span', 'button'],
    computed: {
    ...mapGetters({
      userId: "getUserId"
    })
  }
}
</script>

<style scoped>
section{
    text-align: center;
}
section img{
    display: block;
    width: 200px;
    height: 200px;
    margin: 0 auto;
}
section h3{
    color: #6a6a6a;
    font-weight: 400;
    font-size: 18px;
}
section span{
    display: block;
    color: #999;
    font-weight: 400;
    font-size: 10px;
    margin: 10px 0;
}
section button{
    background-color: #56d176;
    color: #fff;
    border: none;
    height: 40px;
    width: 130px;
    font-size: 15px;
    border-radius: 5px;
    outline: none;
}
.button-null{
    display: none;
}
</style>
