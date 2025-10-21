<template>
<div class="container text-center mt-5">
    <h2>Bộ đếm</h2>
    <p>Giá trị hiện tại: <strong>{{ count }}</strong></p>
    <p>Giá trị gấp đôi: <strong>{{ doubleCount }}</strong></p>
    <button @click="onClickTang" class="btn btn-success">Tăng</button>
    <button @click="onClickGiam" class="btn btn-danger">Giảm</button>
</div>
</template>

<script setup>
import { computed, ref } from 'vue';
const count = ref(0);
const doubleCount = computed(()=> count.value * 2);
const onClickTang = () => count.value++
const onClickGiam = () => count.value--
</script>