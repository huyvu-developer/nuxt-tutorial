<template>
  <div class="container mt-4">
    <h2>Lifecycle Hooks Demo</h2>
    
    <!-- Loading state -->
    <div v-if="loading" class="alert alert-info">
      Loading posts...
    </div>

    <!-- Error state -->
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <!-- Window size display -->
    <div class="alert alert-secondary">
      Window size: {{ windowWidth }}px × {{ windowHeight }}px
    </div>

    <!-- Posts list -->
    <div v-if="posts.length" class="row">
      <div v-for="post in posts" :key="post.id" class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Update counter display -->
    <div class="mt-3 text-muted">
      Component has been updated {{ updateCount }} times
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

// State
const posts = ref([])
const loading = ref(true)
const error = ref(null)
const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const updateCount = ref(0)
 
// Methods
const handleResize = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

const fetchPosts = async () => {
  try {
    loading.value = true
    error.value = null
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    if (!response.ok) throw new Error('Failed to fetch posts')
    posts.value = await response.json()
  } catch (e) {
    error.value = e.message
    console.error('Error fetching posts:', e)
  } finally {
    loading.value = false
  }
}

// Lifecycle Hooks
onMounted(() => {
  console.log('Component is mounted')
  // Fetch initial data
  fetchPosts()
  // Add window resize listener
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  console.log('Component is being destroyed')
  // Clean up event listeners
  window.removeEventListener('resize', handleResize)
})

onUpdated(() => {
  console.log('Component updated')
  updateCount.value++
})
</script>

<style scoped>
.card {
  height: 100%;
}
.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>