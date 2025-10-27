import { Category } from "~~/server/types/blog"
export default defineEventHandler((): Category[] => {
    return [
        { id: 1, name: 'Frontend', description: 'Vue, React, CSS' },
        { id: 2, name: 'Backend', description: 'Laravel, Node.js' },
    ]
})