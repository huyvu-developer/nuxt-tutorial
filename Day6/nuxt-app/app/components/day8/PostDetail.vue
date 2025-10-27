<script setup lang="ts">
defineProps<{ post: any; categoryName: string }>()
</script>
<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p class="text-muted">Danh mục: {{ categoryName }}</p>
    <p>{{ post.content }}</p>
  </div>
</template>


