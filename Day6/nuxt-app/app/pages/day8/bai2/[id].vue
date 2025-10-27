<script lang="ts" setup>
import { useProducts } from '~/stores/day8/products';

const route = useRoute()
const id = Number(route.params.id)
const listProduct = useProducts()
const product = computed(()=> listProduct.getProductId(id))
</script>
<template>
  <div class="container py-5">
    <div v-if="product" class="card shadow-sm p-4">
      <h3>{{ product.name }}</h3>
      <p>Giá: <strong>{{ product.price }} USD</strong></p>
      <p>{{ product.description }}</p>

      <NuxtLink to="/day8/bai2" class="btn btn-secondary mt-3">← Quay lại danh sách</NuxtLink>
    </div>

    <div v-else class="alert alert-danger">Không tìm thấy sản phẩm này!</div>
  </div>
</template>