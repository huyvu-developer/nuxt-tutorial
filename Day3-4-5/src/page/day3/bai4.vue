<script setup>
import { ref, computed } from 'vue'

const firstName = ref('Hiếu')
const lastName = ref('Kiều')

const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (value) => {
    const [first, last] = value.split(' ')
    firstName.value = first
    lastName.value = last
  }
})
</script>

<template>
  <div>
    <input v-model="fullName" placeholder="Nhập họ và tên" />
    <p>Họ: {{ firstName }}</p>
    <p>Tên: {{ lastName }}</p>
  </div>
</template>
