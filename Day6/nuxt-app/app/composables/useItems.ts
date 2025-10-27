export interface Item {
    id: number
    name: string
    description: string
}

export const useItems = () => {
    const items = ref<Item[]>([])
    const apiFetch = <T>(url: string, options?: any) => $fetch<T>(url, options)
    const fetchItems = async () => {
        items.value = await apiFetch<Item[]>('/api/items')
    }
    const createItem = async (data: Omit<Item, 'id'>) => {
        await $fetch('/api/items', { method: 'POST', body: data })
        await fetchItems()
    }

    const updateItem = async (id: number, data: Partial<Item>) => {
        await apiFetch(`/api/items/${id}`, { method: 'PUT', body: data })
        await fetchItems()
    }

    const deleteItem = async (id: number) => {
        await apiFetch(`/api/items/${String(id)}`, { method: 'DELETE' })
        await fetchItems()
    }
    return { items, fetchItems, createItem, updateItem, deleteItem }
}