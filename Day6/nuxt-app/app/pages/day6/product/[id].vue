<template>
  <div>
    <h2>Chi tiết sản phẩm #{{ product.id }}</h2>
    <p><strong>Tên:</strong> {{ product.title }}</p>
    <p><strong>Mô tả:</strong> {{ product.description }}</p>
    <NuxtLink to="/day6">⬅ Quay lại danh sách</NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const { data: product } = await useAsyncData(`product-${route.params.id}`, () =>
  $fetch(`https://fakestoreapi.com/products/${route.params.id}`)

)
const {data: products} = await useFetch('https://fakestoreapi.com/products')

// defineGenerateRoute(async () => {
//   const products = await $fetch('https://fakestoreapi.com/products')
//   return products.map((p) => `/day6/product/${p.id}`)
// })
</script>
