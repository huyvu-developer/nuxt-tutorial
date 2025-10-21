<template>
  <div>
    <h2 class="mb-3">Danh sách sản phẩm (SSR)</h2>
    <nuxt-link to="/day6/dashboard" class="text-decoration-none">Đi đến Dashboard</nuxt-link>
    <TodoForm @add="addItem" />
    <TodoList :items="products" />
  </div>
</template>

<script setup>
import TodoForm from '~/components/TodoForm.vue'
import TodoList from '~/components/TodoList.vue'

definePageMeta({
  layout: 'layout' 
})
const { data: products } = await useAsyncData('products',()=> $fetch('https://fakestoreapi.com/products'))
const addItem = (item) => {
  products.value.push({ id: Date.now(), title: item })
}
</script>