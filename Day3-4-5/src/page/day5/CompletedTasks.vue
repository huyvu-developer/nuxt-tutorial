<template>
  <div>
    <h2>Completed Tasks</h2>
    <ul>
      <li v-for="task in completedTasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const completedTasks = computed(() => store.getters.completedTasks)
</script>
