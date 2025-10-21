<template>
  <div class="container">
    <h2>Dashboard</h2>
    <p>Welcome, {{ username }}</p>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const username = computed(() => store.state.userName)
const counter = computed(() => store.state.count)

const increment = () => store.commit('INCREMENT')
const decrement = () => store.commit('DECREMENT')
</script>
