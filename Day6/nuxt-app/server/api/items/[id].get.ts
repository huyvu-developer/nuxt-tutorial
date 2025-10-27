export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))
  const items = event.context.items
  const item = items.find(i => i.id === id)

  if (!item) {
    throw createError({ statusCode: 404, statusMessage: 'Item not found' })
  }

  return item
})
