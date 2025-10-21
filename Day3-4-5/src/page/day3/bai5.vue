<template>
    <div class="container mt-4">
        <h1 class="text-center">Danh sách nhiệm vụ</h1>
        <div class="input-group mb-3">
            <input type="text" v-model="newTask" class="form-control" placeholder="Nhập tên nhiệm vụ">
            <button @click="addTask" class="btn btn-primary">Thêm</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên nhiệm vụ</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Chức năng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td :class="{ 'text-decoration-line-through text-muted': item.status === 'Hoàn thành' }">{{
                        item.name }}</td>
                    <td><span :class="[
                        'badge',
                        item.status === 'Hoàn thành' ? 'bg-success' : 'bg-secondary'
                    ]">
                            {{ item.status }}
                        </span></td>
                    <td>
                        <button @click="markDone(item.id)" class="btn btn-success btn-sm me-2"
                            :disabled="item.status === 'Hoàn thành'">
                            Hoàn thành
                        </button>
                        <button @click="OnclickDelete(item.id)" class="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const items = reactive([
    { id: 1, name: 'Bài 1', status: 'Chưa hoàn thành' },
    { id: 2, name: 'Bài 2', status: 'Chưa hoàn thành' },
    { id: 3, name: 'Bài 3', status: 'Chưa hoàn thành' },
])
const newTask = ref('')

const addTask = () => {
    if (newTask.value.trim() === '') return alert('Vui lòng nhập nhiệm vụ')
    items.push({
        id: Date.now(),
        name: newTask.value,
        status: 'Chưa hoàn thành'
    })
    newTask.value = ''
}

const markDone = (id) => {
    const task = items.find((t) => t.id === id)
    if (task) task.status = 'Hoàn Thành'
}

const OnclickDelete = (id) => {
    const index = items.find((t) => t.id === id)
    if (index !== -1) items.splice(index, 1)
}

</script>