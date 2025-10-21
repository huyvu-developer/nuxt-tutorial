<template>
    <div class="buttons">
        <button @click="decrement">- Giảm</button>
        <button @click="increment">+ Tăng</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();
const increment = () => {
    store.dispatch('increment');
};
const decrement = () => {
    store.dispatch('decrement');
};
</script>
<style scoped>
.buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #2c8a63;
}
</style>
