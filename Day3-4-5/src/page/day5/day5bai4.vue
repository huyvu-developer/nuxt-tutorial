<template>
  <div class="app">
    <Navbarbai4 />
    <router-view />
  </div>
</template>

<script setup>
import Navbarbai4 from '@/components/navbarbai4.vue';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.app {
  padding: 20px;
}
</style>
