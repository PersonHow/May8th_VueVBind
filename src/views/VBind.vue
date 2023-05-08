<script>
export default{
    data(){
        return{
            changImg:false,
            cimg:["https://www.skmpark.com/WebFiles/20220119/20220119_3a4ac2c9749848ad9f7a6528b5bb542c.jpg",
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/0537d2e4-c96c-46ca-9942-98866ff722dd/nike-%E7%94%B7%E7%94%A8%E9%9E%8B%E6%AC%BE%E3%80%81%E6%9C%8D%E8%A3%9D%E8%88%87%E9%85%8D%E4%BB%B6.png"]
        }
    },
    methods:{
        imgChange(){
            this.changImg = !this.changImg;
        }
    },
    mounted(){

    }
}
</script>


<template>

<div class="img">
    <button type="button" @click="imgChange"> changeImg</button>
    <img v-bind:src="cimg[this.changImg ? 0:1 ]">

</div>

</template>

<style>


</style>