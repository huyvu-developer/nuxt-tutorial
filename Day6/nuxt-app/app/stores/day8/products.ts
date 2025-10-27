import type { Product } from "~~/server/types/productsDay8";
import { defineStore } from "pinia";

export const useProducts = defineStore('products',()=>{
    const list = ref<Product[]>([])
    const loading = ref(false);
    
    async function fetchAll(){
        loading.value=true
        const {data} = await useFetch<Product[]>('/api/productsday8')
        list.value=data.value || []
        loading.value = false
    }
    
    function getProductId(id:number){
        return list.value.find(product => product.id === id)
    }
    
    return {list, loading ,fetchAll, getProductId}
})