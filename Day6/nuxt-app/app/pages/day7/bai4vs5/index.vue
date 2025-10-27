
<script setup lang="ts">
import { useItems } from "~/composables/useItems"

const { items, fetchItems, deleteItem }= useItems()
onMounted(() => {
    fetchItems()
})
onActivated(() => {
  fetchItems()
})
</script>
<template>
    <div class="container py-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h1 class="h4 m-0">Quản lý items</h1>
            <NuxtLink to="/day7/bai4vs5/create" class="btn btn-primary">Thêm mới</NuxtLink>
        </div>

        <table class="table table-bordered table-striped">
            <thead class="table-light">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td>
                        <NuxtLink :to="`/day7/bai4vs5/edit/${item.id}`" class="btn btn-sm btn-primary me-2 ">Sửa</NuxtLink>
                        <NuxtLink :to="`/day7/bai4vs5/${item.id}`" class="btn btn-info btn-sm me-2">Chi tiết</NuxtLink>
                        <button @click="deleteItem(item.id)" class="btn btn-sm btn-danger">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
