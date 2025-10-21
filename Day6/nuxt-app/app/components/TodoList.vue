<template>
    <div>
     <TodoItem v-for="item in items" :key="item.id" :item="item" />
    </div>
</template>
<script setup>
import TodoItem from '~/components/TodoItem.vue'
defineProps({ items: Array })
</script>