<script setup lang="ts">
import { useBlogStore } from '~/stores/day8/blog';
import CategoryList from '~/components/day8/CategoryList.vue';
const blog = useBlogStore()
await blog.fetchCategories()
</script>
<template>
    <div class="container py-4">
        <h2 class="mb-4">Danh mục bài viết</h2>
        <CategoryList :categories="blog.categories"/>
    </div>
</template>