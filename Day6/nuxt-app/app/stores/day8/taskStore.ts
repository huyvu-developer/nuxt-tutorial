import { defineStore } from "pinia";
import type { Task } from "~~/server/types/taskDay8";

export const useTaskStore = defineStore('task', () => {
    const tasks = ref<Task[]>([])
    const currentTask = ref<Task | null>(null)

    const fetchTasks = async () => {
        const { data } = await useFetch<Task[]>(`/api/taskDay8/task`)
        tasks.value = data.value || []
    }

    const fetchTaskById = async (id: number) => {
        const { data } = await useFetch<Task>(`/api/taskDay8/task/${id}`)
        currentTask.value = data.value || null
    }

    const addTask = async (newTask: Omit<Task, 'id' | 'done'>) => {
        const { data } = await useFetch(`/api/taskDay8/task`, {
            method: 'POST',
            body: newTask
        })
        if (data.value) tasks.value.push(data.value)
    }

    const updateTask = async (id: number, updatedDate: Partial<Task>) => {
        const { data } = await useFetch<Task>(`/api/taskDay8/task/${id}`, {
            method: 'PUT',
            body: updatedDate,
        })
        const updated = data.value
        if (updated) {
            const index = tasks.value.findIndex((t) => t.id === id)
            if (index !== -1) tasks.value[index] = updated
        }
    }

    const deleteTask = async (id: number) => {
        await useFetch(`/api/taskDay8/task/${id}`, { method: 'DELETE' })
        tasks.value = tasks.value.filter((t) => t.id !== id)
    }

    return { tasks, currentTask, fetchTasks, fetchTaskById, addTask, updateTask, deleteTask }
})