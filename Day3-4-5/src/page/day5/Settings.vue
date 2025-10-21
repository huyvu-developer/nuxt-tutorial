<template>
    <div class="container">
        <h2>Settings</h2>
        <p>Dark Mode: {{ darkMode ? 'on' : 'off' }}</p>
        <button @click="toggleMode">Toggle Dark Mode</button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const darkMode = computed(()=> store.state.darkMode)
const toggleMode =() =>{
    store.commit('toggleDarkMode')  
}
</script>