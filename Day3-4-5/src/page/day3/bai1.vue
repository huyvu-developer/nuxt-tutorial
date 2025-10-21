<template>
    <div>
        <h1>{{ nameTitle }}</h1>
        <button @click="onClickChangeName">Nút bấm</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const nameTitle = ref('Hello')

function onClickChangeName(){
    const current = nameTitle.value
    nameTitle.value = current === "Hello" ? "he lo" : "Hello"
}
</script>