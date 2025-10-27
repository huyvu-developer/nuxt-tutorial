<script setup lang="ts">
import { useBlogStore } from '~/stores/day8/blog'

const blog = useBlogStore()
const props = defineProps<{ categoryId: number }>()

const newPost = reactive({
  title: '',
  content: ''
})

const handleAddPost = () => {
  if (!newPost.title || !newPost.content) return alert('Vui lòng nhập đủ thông tin!')
  blog.addPost(props.categoryId, newPost.title, newPost.content)
  newPost.title = ''
  newPost.content = ''
  alert('Thêm bài viết thành công!')
}
</script>

<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">Thêm bài viết mới</h5>
      <div class="mb-3">
        <label class="form-label">Tiêu đề</label>
        <input v-model="newPost.title" type="text" class="form-control" placeholder="Nhập tiêu đề bài viết" />
      </div>
      <div class="mb-3">
        <label class="form-label">Nội dung</label>
        <textarea v-model="newPost.content" class="form-control" rows="3" placeholder="Nhập nội dung"></textarea>
      </div>
      <button class="btn btn-primary" @click="handleAddPost">Thêm bài viết</button>
    </div>
  </div>
</template>
