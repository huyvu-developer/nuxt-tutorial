<template>
    <h3 class="">Thêm công việc mới</h3>
   <form @submit.prevent="submitForm" class="mb-3">
    <input type="text" v-model="text" placeholder="Nhập công việc..." class="form-control mb-2" />
    <button class="btn btn-primary">Thêm</button>
   </form>
</template>
<script setup>
const emit = defineEmits(['add'])
const text = ref('')
const submitForm = () => {
  if (text.value.trim() !== '') {
    emit('add', text.value.trim())
    text.value = ''
  }
}
</script>