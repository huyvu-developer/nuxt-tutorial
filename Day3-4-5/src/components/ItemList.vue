<template>
  <div>
    <div class="input-group mb-3">
      <input v-model="newItem" @keyup.enter="addItem" type="text" class="form-control" placeholder="Nhập tên mục" />
      <button @click="addItem" class="btn btn-primary">Thêm</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên mục</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <div v-if="editId !== item.id"> 
              <span :class="{ 'text-decoration-line-through text-muted': item.status === 'Hoàn thành' }">{{ item.name }}</span>
            </div>
            <div v-else>
              <input v-model="editName" class="form-control form-control-sm" />
            </div>
          </td>
          <td>
            <span :class="['badge', item.status === 'Hoàn thành' ? 'bg-success' : 'bg-secondary']">{{ item.status }}</span>
          </td>
          <td>
            <div v-if="editId !== item.id">
              <button @click="startEdit(item)" class="btn btn-sm btn-outline-secondary me-2">Sửa</button>
              <button @click="toggleDone(item)" class="btn btn-sm btn-success me-2" :disabled="item.status === 'Hoàn thành'">Hoàn thành</button>
              <button @click="removeItem(item.id)" class="btn btn-sm btn-danger">Xóa</button>
            </div>
            <div v-else>
              <button @click="saveEdit(item.id)" class="btn btn-sm btn-primary me-2">Lưu</button>
              <button @click="cancelEdit" class="btn btn-sm btn-secondary">Hủy</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  initial: {
    type: Array,
    default: () => []
  }
})

// internal reactive list so parent can't accidentally mutate original array reference
const items = reactive(props.initial.length ? props.initial.map(i => ({ ...i })) : [
  { id: 1, name: 'Học Vue 3', status: 'Chưa hoàn thành' },
  { id: 2, name: 'Làm bài tập', status: 'Chưa hoàn thành' },
  { id: 3, name: 'Đi dạo', status: 'Chưa hoàn thành' }
])

const newItem = ref('')
const editId = ref(null)
const editName = ref('')

function addItem() {
  const name = newItem.value.trim()
  if (!name) return alert('Vui lòng nhập tên mục')
  items.push({ id: Date.now(), name, status: 'Chưa hoàn thành' })
  newItem.value = ''
}

function removeItem(id) {
  const idx = items.findIndex(i => i.id === id)
  if (idx !== -1) items.splice(idx, 1)
}

function toggleDone(item) {
  const found = items.find(i => i.id === item.id)
  if (found) found.status = 'Hoàn thành'
}

function startEdit(item) {
  editId.value = item.id
  editName.value = item.name
}

function saveEdit(id) {
  const idx = items.findIndex(i => i.id === id)
  if (idx !== -1) {
    const name = editName.value.trim()
    if (!name) return alert('Tên không được rỗng')
    items[idx].name = name
  }
  editId.value = null
  editName.value = ''
}

function cancelEdit() {
  editId.value = null
  editName.value = ''
}

// expose for template
</script>

<style scoped>
.text-decoration-line-through { text-decoration: line-through; }
</style>
