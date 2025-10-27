<script setup lang="ts">
import { useTaskStore } from '~/stores/day8/taskStore';

const route = useRoute()
const taskStore = useTaskStore()
await taskStore.fetchTaskById(Number(route.params.id))

</script>

<template>
    <div class="container  py-4">
        <NuxtLink to="/day8/bai4" class="btn btn-outline-secondary">Quay lại</NuxtLink>
        <div v-if="taskStore.currentTask" class="card p-3 shadow-sm">
            <h3>{{ taskStore.currentTask.title }}</h3>
            <p class="text-muted">{{ taskStore.currentTask.description }}</p>
        </div>
        <p v-else class="text-danger">Không tìm thấy nhiệm vụ!</p>
    </div>
</template>