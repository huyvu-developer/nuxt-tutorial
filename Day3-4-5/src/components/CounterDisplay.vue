<template>
<div class="display">
    <h2>Giá trị hiện tại : {{ count }}</h2>
    <p>Giá trị gấp đôi (getter) : {{ doubleCount }}</p>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
const count = computed(() => store.state.count);
const doubleCount = computed(() => store.getters.doubleCount);
</script>

<style scoped>
.display {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    max-width: 300px;
    margin: 16px auto;
    text-align: center;
    background-color: #f9f9f9;
}
</style>