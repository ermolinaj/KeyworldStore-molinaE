import { products } from "./Data.js"

export const obtainProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const obtainProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(p => p.id === id))
        }, 2000)
    })
}

export const obtainAllProductIds = () => {
    return products.map(p => p.id)
}