export type Product = {
    id: number,
    category: string,
    name: string,
    image: string,
    size: string,
    price: number,
    oldPrice: number;
    rating: number,
    isFavorite: boolean,
    onSale: boolean
}

export type Discount = {
    product: Product,
    amountRequired: number
}

export type ShoppingItem = Product & { totalPerItem: number }

export type ShoppingCart = {
    [key: string]: ShoppingItem;
}

export interface CartItem {
    product: Product,
    quantity: number,
    itemPrice: number
}

export interface ShoppingCartState {
    items: CartItem[];
    totalPrice: number;
    totalQuantity: number;
    show: false
}

export interface ProductState {
    entities: {
        cart: ShoppingCartState,
        products: {
            items: Product[]
        }
    }
}