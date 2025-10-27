import type { Item } from '~~/server/types/item'
let Items: Item[] = [
  { id: 1, name: 'Laptop Dell XPS', description: 'Mỏng nhẹ, hiệu năng mạnh mẽ.' },
  { id: 2, name: 'Chuột Logitech', description: 'Phản hồi nhanh, pin lâu.' },
  { id: 3, name: 'Điện thoại Iphone', description: 'Đền bỉ, sang trọng, pin lâu.' },
]

export default defineEventHandler((event) => {
  // Gắn dữ liệu lên request context để các route khác dùng
  event.context.items = Items
})
