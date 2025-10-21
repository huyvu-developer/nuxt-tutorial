<template>
  <div>
    <h2>Nhập nội dung bên dưới:</h2>
    <input v-model="title" type="text" placeholder="Gõ gì đó..." />
    <p>Bạn vừa nhập: <strong>{{ title }}</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Tạo biến reactive
const title = ref('')
</script>

<style scoped>
input {
  padding: 8px;
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
