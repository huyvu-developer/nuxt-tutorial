<script setup lang="ts">
import { useTaskStore } from '~/stores/day8/taskStore';

const router = useRouter()
const taskStore = useTaskStore()
const newTask =reactive({
    title:'',
    description:''
})
const handleAdd =async()=>{
    if(!newTask.title.trim()) return alert('Vui lòng nhập tiêu đề')
    await taskStore.addTask(newTask)
    router.push('/day8/bai4')
}
</script>

<template>
    <div class="container py-4">
        <h2>Thêm nhiệm vụ mới</h2>
        <form @submit.prevent="handleAdd" class="mt-3 card p-3 shadow-sm">
            <div class="mb-3">
                <label for="">Tiêu đề</label>
                <input v-model="newTask.title" class="form-control" placeholder="Nhập tiêu đề">
            </div>
            <div class="mb-3">
                <label for="">Mô tả</label>
                <textarea v-model="newTask.description" class="form-control" rows="3"></textarea>
            </div>
            <div class="d-flex justify-content-between">
                <NuxtLink to="/day8/bai4" class="btn btn-outline-secondary">Quay lại</NuxtLink>
                <button type="submit" class="btn btn-primary">Lưu nhiệm vụ</button>
            </div>
        </form>
    </div>
</template>