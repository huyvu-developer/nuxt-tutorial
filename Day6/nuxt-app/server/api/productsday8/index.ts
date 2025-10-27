import { Product } from "~~/server/types/productsDay8"
export default defineEventHandler((): Product[]=>{
    return [
    { id: 1, name: 'iPhone 15 Pro', price: 1200, description: 'Chiếc điện thoại cao cấp nhất của Apple.' },
    { id: 2, name: 'MacBook Air M3', price: 1500, description: 'Laptop mỏng nhẹ và mạnh mẽ.' },
    { id: 3, name: 'iPad Pro M4', price: 999, description: 'Máy tính bảng mạnh mẽ dành cho dân sáng tạo.' },
  ]
})