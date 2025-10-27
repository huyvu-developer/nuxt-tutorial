<script setup lang="ts">
import { useTaskStore } from '~/stores/day8/taskStore'

const taskStore = useTaskStore()
await taskStore.fetchTasks()
</script>

<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="mb-0">Danh sách nhiệm vụ</h2>
      <NuxtLink to="/day8/bai4/addTask" class="btn btn-success">Thêm mới</NuxtLink>
    </div>

    <ul class="list-group shadow-sm">
      <li
        v-for="task in taskStore.tasks"
        :key="task.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <NuxtLink :to="`/day8/bai4/${task.id}`" class="fw-bold">{{ task.title }}</NuxtLink>
          <p class="mb-0 text-muted small">{{ task.description }}</p>
        </div>

        <div class="btn-group">
          <NuxtLink :to="`/day8/bai4/edit/${task.id}`" class="btn btn-sm btn-outline-primary">Sửa</NuxtLink>
          <button
            class="btn btn-sm btn-outline-danger"
            @click="taskStore.deleteTask(task.id)"
          >
            Xóa
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
