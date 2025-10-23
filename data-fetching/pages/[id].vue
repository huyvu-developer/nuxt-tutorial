<script setup lang="ts">
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const route = useRoute();
const router = useRouter();

// Fetch todo data based on ID
const { data: todo, pending, error } = await useFetch<Todo | null>(
  `https://jsonplaceholder.typicode.com/todos/${route.params.id}`,
  {
    default: () => null,
    key: `todo-${route.params.id}`
  }
);
</script>

<template>
  <div class="container">
    <button @click="router.back()" class="back-btn">← Quay lại</button>
    
    <div v-if="pending" class="loading">
      <p>Đang tải dữ liệu...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>Có lỗi xảy ra: {{ error }}</p>
    </div>
    
    <div v-else-if="todo" class="todo-detail">
      <h1>Chi tiết công việc #{{ todo.id }}</h1>
      <div class="todo-info">
        <div class="info-row">
          <span class="label">Tiêu đề:</span>
          <span class="value">{{ todo.title }}</span>
        </div>
        <div class="info-row">
          <span class="label">User ID:</span>
          <span class="value">{{ todo.userId }}</span>
        </div>
        <div class="info-row">
          <span class="label">Trạng thái:</span>
          <span class="value" :class="{ completed: todo.completed }">
            {{ todo.completed ? "Đã hoàn thành" : "Chưa hoàn thành" }}
          </span>
        </div>
      </div>
    </div>
    
    <div v-else class="not-found">
      <p>Không tìm thấy công việc với ID: {{ route.params.id }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.back-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 30px;
  transition: background 0.3s ease;

  &:hover {
    background: #2980b9;
  }
}

.loading,
.error,
.not-found {
  text-align: center;
  padding: 40px 20px;
  
  p {
    font-size: 1.1rem;
    color: #7f8c8d;
  }
}

.error p {
  color: #e74c3c;
}

.todo-detail {
  h1 {
    color: #2c3e50;
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
  }
}

.todo-info {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border: 1px solid #e1e8ed;

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #ecf0f1;

    &:last-child {
      border-bottom: none;
    }

    .label {
      color: #7f8c8d;
      font-weight: 500;
      font-size: 1.1rem;
    }

    .value {
      color: #2c3e50;
      font-weight: 600;
      font-size: 1.1rem;

      &.completed {
        color: #27ae60;
      }
    }
  }
}
</style>
