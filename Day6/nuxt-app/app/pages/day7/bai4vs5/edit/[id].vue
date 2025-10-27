<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useItems } from '~/composables/useItems'
const router = useRouter()
const route  = useRoute()
const id = Number(route.params.id) 
const form = reactive({name:'',description:''});
onMounted(async()=>{
    const data = await $fetch(`/api/items/${id}`)
    Object.assign(form,data)
})
const {updateItem} = useItems()
const submit = async()=>{
    await updateItem(id,form)
    router.push('/day7/bai4vs5');
}
</script>

<template>
  <div class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-warning text-white">
        <h3 class="mb-0">Chỉnh sửa Item</h3>
      </div>

      <div class="card-body">
        <form @submit.prevent="submit">
          <div class="mb-3">
            <label for="name" class="form-label">Tên</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-control"
              placeholder="Nhập tên sản phẩm"
              required
            />
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">Mô tả</label>
            <textarea
              id="description"
              v-model="form.description"
              class="form-control"
              rows="4"
              placeholder="Nhập mô tả chi tiết"
            ></textarea>
          </div>

          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-warning text-white px-4">
              <i class="bi bi-pencil-square me-1"></i> Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
