
export default defineEventHandler(async (event) => {
    const body = await readBody(event) as { name: string; description: string }
    const items = event.context.items
    const newItem = {
        id: items.length ? items[items.length - 1].id + 1 : 1,
        name: body.name,
        description: body.description
    }
    items.push(newItem)
    return { message: 'Item created successfully', data: newItem }
})