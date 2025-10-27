<script setup lang="ts">
import { useBlogStore } from '~/stores/day8/blog';
import PostDetail from '~/components/day8/PostDetail.vue';
const route = useRoute()
const blog = useBlogStore()
const post = computed(() => blog.posts.find((p) => p.id === Number(route.params.postId)))
</script>

<template>
    <div class="container py-4">
        <NuxtLink :to="`/day8/bai3/${route.params.id}`" class="btn btn-link mb-3">Quay lại</NuxtLink>
        <PostDetail :post="post" :categoryName="blog.currentCategory?.name || ''" />
    </div>
</template>