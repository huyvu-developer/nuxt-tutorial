<script setup lang="ts">
defineProps<{
  posts: { id: number; title: string; content: string }[]
  categoryId: number
}>()
</script>

<template>
  <div>
    <h4>Bài viết:</h4>
    <ul class="list-group">
      <li v-for="post in posts" :key="post.id" class="list-group-item">
        <NuxtLink :to="`/day8/bai3vs5/${categoryId}/post/${post.id}`">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
