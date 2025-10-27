<script setup>
const { data:posts, pending , error } = await useAsyncData('posts', ()=> $fetch('https://jsonplaceholder.typicode.com/posts'))
</script>

<template>
  <div class="container py-5">
    <h1 class="mb-4 text-center">Danh sách bài viết</h1>
    <div v-if="pending" class="text-center text-muted">Đang tải dữ liệu...</div>
    <div v-else-if="error" class="text-danger text-center">
      Lỗi khi tải dữ liệu: {{ error.message }}
    </div>
    <div v-else>
      <div
        v-for="post in posts"
        :key="post.id"
        class="card mb-3 shadow-sm"
      >
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text text-secondary">{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

