import { tasks } from "../data/task";

export default defineEventHandler((event)=>{
    const id = Number(event.context.params?.id)
    const index = tasks.findIndex(t=>t.id===id)
    if (index === -1) throw createError({ statusCode: 404, statusMessage: 'Task not found' })
    tasks.splice(index,1)
    return {success: true}
})