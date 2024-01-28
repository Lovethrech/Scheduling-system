<script setup>
import {RouterView} from "vue-router"
</script>

<template>
  <div class="img-container">
    </div>
    <div class="app">
      <RouterView></RouterView>
    </div>
</template>

<style scoped>
.img-container {
  background: url("/public/Bells-logo.gif") center/auto no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
}
.app {
  font-family: 'Inter', sans-serif;
}
</style>