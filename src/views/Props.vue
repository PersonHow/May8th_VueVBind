<script>
import Child from '../components/Child.vue'
export default{
    components:{
        Child
    },
    data(){
        return{
            title: "Props 標題"
        }
    }
}
</script>

<template>
        <div class="ppp">
            <h2>Props</h2>
            <Child 
            v-bind:childTitle="title"/>
        </div>  

</template>


<style>

</style>