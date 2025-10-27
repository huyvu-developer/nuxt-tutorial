import { tasks } from "../data/task";

export default defineEventHandler((event)=>{
    const id = Number(event.context.params?.id)
    const task = tasks.find(t=> t.id === id)
    return task
})