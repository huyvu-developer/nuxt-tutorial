<template>
  <div class="border rounded p-2 mb-2">
    <NuxtLink :to="`/day6/product/${item.id}`" class="text-decoration-none">
      {{ item.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>
