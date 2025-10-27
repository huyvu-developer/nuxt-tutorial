import { tasks } from "../data/task";

export default defineEventHandler(async(event)=>{
    const id = Number(event.context.params?.id)
    const body = await readBody(event)
    const index = tasks.findIndex(t=> t.id === id)
    if(index === -1) throw createError({statusCode:404,statusMessage:'task not found'})
    tasks[index]= {...tasks[index],...body}
    return tasks[index]
})