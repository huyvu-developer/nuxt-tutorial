import addDiscount from "~~/server/api/utils/addDiscount"
export default defineEventHandler(async (event) => {
  const products = [
    { id: 1, name: 'iPhone 15 Pro', price: 1200 },
    { id: 2, name: 'MacBook Air M3', price: 1500 },
    { id: 3, name: 'iPad Pro M4', price: 999 },
  ]
  return addDiscount(products)
})