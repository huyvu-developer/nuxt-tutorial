<script setup>
const { data: products, pending, error } = await useFetch('/api/products')
</script>

<template>
    <div class="container py-5">
        <h1 class="mb-4 text-center">Danh sách sản phẩm</h1>
        <p v-if="pending" class="text-muted text-center">Đang tải dữ liệu...</p>
        <p v-else-if="error" class="text-danger text-center">Lỗi tải dữ liệu!</p>
        <div v-else class="row justify-content-center">
            <div v-for="product in products" :key="product.id" class="col-md-4 mb-3">
                <div class="card shadow-sm p-3 text-center">
                    <h5>{{ product.name }}</h5>
                    <p class="text-primary fw-bold">{{ product.price.toLocaleString() }}₫</p>
                    <p class="text-success">Giảm giá: {{ product.discount }}</p>
                </div>
            </div>
        </div>
    </div>
</template>