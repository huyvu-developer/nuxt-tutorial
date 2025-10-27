<script setup lang="ts">
import { useBlogStore } from '~/stores/day8/blog';
import PostList from '~/components/day8/PostList.vue';
import AddPostForm from '../AddPostForm.vue';
const route = useRoute()
const blog = useBlogStore()
await blog.fetchCategoriesById(Number(route.params.id))
await blog.fetchPostByCategory(Number(route.params.id))
</script>
<template>
    <div class="container py-4">
        <h2 class="mb-3">{{ blog.currentCategory?.name }}</h2>
        <p class="text-muted">{{ blog.currentCategory?.description }}</p>
        <hr />
        <AddPostForm :categoryId="Number(route.params.id)" />
        <PostList :posts="blog.posts" :categoryId="Number(route.params.id)"/>
    </div>
</template>