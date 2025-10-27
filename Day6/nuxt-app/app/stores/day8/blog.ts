import { defineStore } from "pinia";
import type { Category, Post } from "~~/server/types/blog";

export const useBlogStore = defineStore('blog', () => {
    const categories = ref<Category[]>([])
    const posts = ref<Post[]>([])
    const currentCategory = ref<Category | null>(null)

    const fetchCategories = async () => {
        const { data } = await useFetch<Category[]>(`/api/categories`)
        categories.value = data.value || []
    }

    const fetchCategoriesById = async (id: number) => {
        const { data } = await useFetch<Category>(`/api/categories/${id}`)
        currentCategory.value = data.value || null
    }

    const fetchPostByCategory = async (categoryId: number) => {
        const { data } = await useFetch<Post[]>(`/api/posts/${categoryId}`)
        posts.value = data.value || []
    }

    const addPost = (categoryId: number, title: string, content: string) => {
        const newId = Date.now()
        const newPost: Post = { id: newId, title, content, categoryId }
        posts.value.push(newPost)
    }

    return { categories, posts, currentCategory, fetchCategories, fetchCategoriesById, fetchPostByCategory, addPost }
})