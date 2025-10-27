<script setup lang="ts">
import { useTaskStore } from '~/stores/day8/taskStore';


const router = useRouter()
const route = useRoute()
const taskStore = useTaskStore()

await taskStore.fetchTaskById(Number(route.params.id))

const editedTask = reactive({
    title :taskStore.currentTask?.title || '',
    description: taskStore.currentTask?.description || ''
})

const handleUpdate = async()=> {
    await taskStore.updateTask(Number(route.params.id),editedTask)
    router.push('/day8/bai4')
}

</script>

<template>
    <div class="container py-4">
        <h2>Sửa nhiệm vụ</h2>
        <NuxtLink to="/day8/bai4" class="btn btn-outline-secondary">Quay lại</NuxtLink>
        <form @submit.prevent="handleUpdate" class="mt-3 card p-3 shadow-sm">
            <div class="mb-3">
                <label for="">Tiêu đề</label>
                <input v-model="editedTask.title" class="form-control" placeholder="Nhập tiêu đề">
            </div>
            <div class="mb-3">
                <label for="">Mô tả</label>
                <textarea v-model="editedTask.description" class="form-control" rows="3"></textarea>
            </div>
            <div class="d-flex justify-content-between">
                <NuxtLink to="/day8/bai4" class="btn btn-outline-secondary">Quay lại</NuxtLink>
                <button type="submit" class="btn btn-primary">Cập nhật</button>
            </div>
        </form>
    </div>
</template>