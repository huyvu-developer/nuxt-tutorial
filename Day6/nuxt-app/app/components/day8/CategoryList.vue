<template>
  <ul class="list-group mt-3">
    <li v-for="category in categories" :key="category.id" class="list-group-item">
      <NuxtLink :to="`/day8/bai3vs5/${category.id}`">{{ category.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  categories: { id: number; name: string }[]
}>()
</script>
