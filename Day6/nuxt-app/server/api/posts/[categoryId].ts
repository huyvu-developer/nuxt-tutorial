export default defineEventHandler((event) => {
    const categoryId = Number(event.context.params?.categoryId)
    const posts = [
        { id: 1, title: 'Giới thiệu Vue 3', content: 'Vue 3 thật tuyệt vời...', categoryId: 1 },
        { id: 2, title: 'React Hooks', content: 'Hooks giúp code gọn hơn...', categoryId: 1 },
        { id: 3, title: 'Laravel Eloquent', content: 'ORM mạnh mẽ của Laravel...', categoryId: 2 },
    ]
    return posts.filter((p) => p.categoryId === categoryId )
})