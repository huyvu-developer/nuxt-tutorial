<template>
<div :class="['app', { dark: darkMode }]">
    <Navbar></Navbar>
     <router-view />
</div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Navbar from '@/components/navbar.vue';
const store = useStore()
const darkMode = computed(()=>store.state.darkMode)
</script>

<style>
.app.dark {
  background: #111;
  color: #eee;
}
</style>