<template>
  <div class="container mt-4">
    <NuxtLink to="/day7/bai4vs5" class="btn btn-secondary mb-3">← Quay lại danh sách</NuxtLink>

    <div v-if="item" class="card shadow-sm p-4">
      <h2 class="card-title mb-3">{{ item.name }}</h2>
      <p class="card-text">{{ item.description }}</p>
    </div>

    <div v-else class="text-center mt-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Đang tải...</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const item = ref<{ id: number; name: string; description: string } | null>(null)

onMounted(async () => {
  const id = Number(route.params.id)
  item.value = await $fetch(`/api/items/${id}`)
})
</script>