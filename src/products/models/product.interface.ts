export interface Product {
    code: string,
    description: string,
    netweight: number
}

export interface SavedProduct extends Product {
    id: string
}

export interface Products {
    [key: string]: SavedProduct
}