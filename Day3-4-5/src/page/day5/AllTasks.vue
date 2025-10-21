<template>
    <div>
        <h2>All Tasks</h2>
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Add new task">
        <button @click="addTask">Add</button>
        <ul>
            <li v-for="task in allTasks" :key="task.id">
                <label>
                    <input type="checkbox" v-model="task.completed" @change="toggle(task.id)">
                    <span :class="{ done: task.completed }">{{ task.title }}</span>
                </label>
                <button @click="deleteTask(task.id)">Remove</button>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const newTask = ref('')
const allTasks = computed(() => store.state.task)
const addTask = () => {
    if (newTask.value.trim()) {
        store.commit('addTask', newTask.value.trim())
        newTask.value = ''
    }
}
const toggle = (id) => {
    store.commit('toggleTask', id)
}
const deleteTask = (id) => {
    store.commit('deleteTask', id)
}
</script>
<style scoped>
.done {
    text-decoration: line-through;
    color: gray;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 8px;
}
</style>