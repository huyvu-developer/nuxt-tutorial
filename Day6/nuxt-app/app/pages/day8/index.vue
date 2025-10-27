<script setup lang="ts">
import { useCounter } from '#imports';
const counter = useCounter()
</script>
<template>
    <div class="container py-5 text-center">
        <h2 class="mb-4">Bộ đếm cơ bản</h2>
         <div class="d-flex justify-content-center align-items-center gap-3">
            <button class="btn btn-danger btn-lg" @click="counter.decrement">-</button>
            <h3 class="m-0 px-4 py-2 border rounded bg-light">{{ counter.count }}</h3>
             <button class="btn btn-success btn-lg" @click="counter.increment">+</button>
         </div>
    </div>
</template>
