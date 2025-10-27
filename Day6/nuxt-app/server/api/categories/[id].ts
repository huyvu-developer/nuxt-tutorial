export default defineEventHandler((event) => {
    const id = Number(event.context.params?.id)
    const categories = [
        { id: 1, name: 'Frontend', description: 'Vue, React, CSS' },
        { id: 2, name: 'Backend', description: 'Laravel, Node.js' },
    ]
    return categories.find((category)=> category.id === id)
})