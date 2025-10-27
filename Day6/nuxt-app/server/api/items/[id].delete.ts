
export default defineEventHandler(async (event) => {
    const id = Number(getRouterParam(event, 'id'))
    const Items = event.context.items 
    const index = Items.findIndex(item => item.id === id)
    if(index === -1){
        throw createError({
            statusCode: 404,
            statusMessage: `Item with ID ${id} not found`
        })
    }
    Items.splice(index, 1)
    return { message: `Item ${id} deleted successfully` }
})