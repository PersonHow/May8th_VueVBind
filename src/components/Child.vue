<script>
export default{
    components:{

    },
    props:[
        "childTitle"
    ],
    data(){
        return{
        }
    }
}
</script>

<template>
    <div class="card">
        <h2>{{ childTitle }}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, mollitia.</p>
    </div>
</template>


<style>
.card{
    width: 200px;
    height: 200px;
    border: 1px solid black;
}

</style>