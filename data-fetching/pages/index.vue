<script setup lang="ts">
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const { data: todos, pending, error } = await useFetch<Todo[]>(
  "https://jsonplaceholder.typicode.com/todos",
  {
    default: () => [] as Todo[]
  }
);
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>Danh sách công việc</h1>
      <p class="subtitle">Quản lý danh sách công việc cần làm</p>
    </div>
    
    <!-- Loading state -->
    <div v-if="pending" class="loading">
      <p>Đang tải dữ liệu...</p>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="error">
      <p>Có lỗi xảy ra khi tải dữ liệu: {{ error }}</p>
    </div>
    
    <!-- Data display -->
    <div v-else-if="todos && Array.isArray(todos) && todos.length > 0">
      <div class="todos-grid">
        <div v-for="todo in todos" :key="todo.id" class="todo-card">
          <div class="todo-header">
            <div class="todo-id">#{{ todo.id }}</div>
            <div class="todo-status" :class="{ completed: todo.completed }">
              {{ todo.completed ? "Hoàn thành" : "Chưa hoàn thành" }}
            </div>
          </div>

          <div class="todo-content">
            <h3 class="todo-title">{{ todo.title }}</h3>
            <div class="todo-details">
              <div class="detail-row">
                <span class="label">User ID:</span>
                <span class="value">{{ todo.userId }}</span>
              </div>
              <div class="detail-row">
                <span class="label">Trạng thái:</span>
                <span class="value" :class="{ completed: todo.completed }">
                  {{ todo.completed ? "Đã hoàn thành" : "Đang thực hiện" }}
                </span>
              </div>
            </div>
          </div>

          <div class="todo-actions">
            <NuxtLink :to="`/${todo.id}`" class="btn-primary">
              Xem chi tiết
            </NuxtLink>
            <button class="btn-secondary">
              {{
                todo.completed
                  ? "Đánh dấu chưa hoàn thành"
                  : "Đánh dấu hoàn thành"
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Empty state -->
    <div v-else class="empty">
      <p>Không có công việc nào</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;

  h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  .subtitle {
    color: #7f8c8d;
    font-size: 1.1rem;
  }
}

.loading,
.error,
.empty {
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

.todos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.todo-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid #e1e8ed;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  .todo-id {
    background: #3498db;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .todo-status {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    background: #e74c3c;
    color: white;

    &.completed {
      background: #27ae60;
    }
  }
}

.todo-content {
  margin-bottom: 20px;

  .todo-title {
    color: #2c3e50;
    font-size: 1.2rem;
    margin-bottom: 15px;
    line-height: 1.4;
  }

  .todo-details {
    .detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #ecf0f1;

      &:last-child {
        border-bottom: none;
      }

      .label {
        color: #7f8c8d;
        font-weight: 500;
        font-size: 0.9rem;
      }

      .value {
        color: #2c3e50;
        font-weight: 600;

        &.completed {
          color: #27ae60;
        }
      }
    }
  }
}

.todo-actions {
  display: flex;
  gap: 10px;

  .btn-primary,
  .btn-secondary {
    padding: 10px 16px;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    text-align: center;
  }

  .btn-primary {
    background: #3498db;
    color: white;

    &:hover {
      background: #2980b9;
    }
  }

  .btn-secondary {
    background: #ecf0f1;
    color: #2c3e50;

    &:hover {
      background: #bdc3c7;
    }
  }
}

@media (max-width: 768px) {
  .todos-grid {
    grid-template-columns: 1fr;
  }

  .todo-actions {
    flex-direction: column;
  }
}
</style>
