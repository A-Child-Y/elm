<template>
    <div>
        详情
    </div>
</template>


<script>
export default {
    beforeRouteLeave (to, from, next) {
        from.meta.isBack = true;
        next()
    },
}
</script>


<style scoped>

</style>
