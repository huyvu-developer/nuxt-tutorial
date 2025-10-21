<template>
  <div id="app">
    <h1>Ứng dụng Đếm (Vuex Counter)</h1>
    <CounterDisplay />
    <CounterButtons />
  </div>
</template>

<script setup>
import CounterDisplay from '@/components/CounterDisplay.vue';
import CounterButtons from '@/components/CounterButtons.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
