<script setup lang="ts">
import { useProducts } from '~/stores/day8/products';

const listProduct = useProducts()
await listProduct.fetchAll()
</script>
<template>
    <div class="container py-5">
        <h2 class="mb-4 text-center">Danh sách sản phẩm</h2>
        <div v-if="listProduct.loading" class="text-center text-muted">Đang tải...</div>
        <ul v-else class="list-group">
            <li v-for="product in listProduct.list" :key="product.id"  class="list-group-item d-flex justify-content-between align-items-center">
                 <NuxtLink :to="`/day8/bai2/${product.id}`" class="text-decoration-none">{{ product.name }}</NuxtLink>
                 <span class="badge bg-primary rounded-pill">{{ product.price }}VnD</span>
            </li>
        </ul>
    </div>
</template>