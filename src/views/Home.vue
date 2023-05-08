<script>
export default{
    data(){
        return{
            changebox:false,
            move:false
        }
    },
    methods:{
        changeColor(){
            this.changebox = !this.changebox;
            this.move = !this.move;
        }
    },
    mounted(){

    }
}
</script>


<template>
    <div class="area">
        <button type="button" @click="changeColor" class="btn">Change!!!!</button>
        <div class="colorArea" v-bind:class="{ rounded:changebox,
                                                location:move       }">
            <p class="text">Color</p>
        </div>
    </div>
</template>



<style>
.area{
    position: relative;
}

.colorArea{
    width: 20rem;
    height: 20rem;
    background-color: aquamarine;
    transition: 1s;
    position: absolute;
    left: 0;
    
}

.rounded{
    width: 20rem;
    height: 20rem;
    background-color: blueviolet;
    border-radius: 50pt;
    color: aliceblue;
    
}

.location{
    left: 200px;
}
</style>