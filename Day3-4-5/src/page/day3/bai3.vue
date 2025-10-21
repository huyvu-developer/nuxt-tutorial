<template>
    <div>
        <h2>Danh sách trái cây:</h2>
        <ul>
            <li v-for="item in items" :key="item.id" :style="{color: item.color}" :id="`fruit-${item.id}`">
                {{ item.name }}     (ID: {{ item.id }})
            </li>
        </ul>       
    </div>
</template>

<script setup>
import { ref } from 'vue';
const items = ref([
    {id: 1, name:'Táo', color:'red'},
    {id:2, name:'Chuối', color: 'orange'},
    {id:3, name:'Nho', color: 'purple'},
])
</script>