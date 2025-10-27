import { tasks } from "../data/task";
import { Task } from "~~/server/types/taskDay8";

export default defineEventHandler(async(event)=>{
    const body = await readBody<Task>(event)
    const newTask = {...body, id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, done: false}
    tasks.push(newTask)
    return newTask
})