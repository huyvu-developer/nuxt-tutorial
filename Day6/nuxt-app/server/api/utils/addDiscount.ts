interface Product {
    id: number;
    name: string;
    price: number;
    discount?: string;
}

export default  (products: Product[]) => {
    return products.map(product => ({
        ...product,
        discount: `${Math.floor(Math.random() * 20)}%`
    }))
}