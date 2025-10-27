
export default defineEventHandler(async (event) => {
    const idParam = getRouterParam(event, 'id')
    const items = event.context.items
    const id = Number(idParam)
    const body = await readBody<{ name: string, description: string }>(event)
    const index = items.findIndex(item => item.id === id)
    if (index === -1) {
        throw createError({
            statusCode: 404,
            statusMessage: `Item with ID ${id} not found`
        })
    }
    items[index] = {
        ...items[index],
        ...body
    }
    return {
        message: `Item ${id} updated successfully`,
        data: items[index]
    }
})