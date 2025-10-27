export interface Category{
    id: number,
    name: string,
    description: string
}

export interface Post{
    id: number,
    title: string,
    content: string,
    categoryId: number
}