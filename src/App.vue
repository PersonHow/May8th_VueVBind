<script setup>
import { RouterLink, RouterView } from 'vue-router'
import VBind from './views/VBind.vue'

</script>

<template>
  <div class="container">
    <h1>This is App.Vue</h1>

    <header>
      <RouterLink to="/" class="link">VBind</RouterLink>
      <RouterLink to="/home" class="link">Home</RouterLink>
      <RouterLink to="/props" class="link">Props</RouterLink>
    </header>

    <div class="routervie">
      <RouterView />
    </div>
    
  </div>
</template>

<style scoped>


.container{
  width: 100%;
  height: 100vh;
  background-color: #888;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

header{
  width: 90%;
  height: 3rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  
}

.routervie{
  width: 80vw;
  height: 80vh;
  border: 1px solid black;
  /* background-color: #666; */
  /* display: flex;
  justify-content: space-around; */
}
</style>
