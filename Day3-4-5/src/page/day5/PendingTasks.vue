<template>
  <div>
    <h2>Pending Tasks</h2>
    <ul>
      <li v-for="task in pendingTasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const pendingTasks = computed(() => store.getters.pendingTasks)
</script>
