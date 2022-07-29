import { ShoppingCartState } from '../../types';
import { createSlice } from '@reduxjs/toolkit'

const initialState: ShoppingCartState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    show: false
};

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (cart, action) => {
            const index = cart.items.findIndex(c => c.product.id === action.payload.id);
            if (index < 0) {
                cart.items.push({ product: action.payload, quantity: 1, itemPrice: action.payload.price })
            } else {
                const prevObj = cart.items[index];
                const quantity = prevObj.quantity + 1;
                const itemPrice = quantity * prevObj.product.price;
                cart.items.splice(index, 1, { product: action.payload, quantity, itemPrice })
            }
            cart.totalPrice += action.payload.price;
            cart.totalQuantity += 1;
        },
        removeProduct: (cart, action) => {
            const index = cart.items.findIndex(c => c.product.id === action.payload.id);
            if (index >= 0) {
                const prevObj = cart.items[index];
                if (prevObj.quantity > 1) {
                    const quantity = prevObj.quantity - 1;
                    const itemPrice = quantity * prevObj.product.price;
                    cart.items.splice(index, 1, { product: action.payload, quantity, itemPrice })
                    cart.totalPrice -= action.payload.price;
                    cart.totalQuantity -= 1;
                }
            }
        },
        deleteProduct: (cart, action) => {
            const index = cart.items.findIndex(c => c.product.id === action.payload.id);
            if (index >= 0) {
                const prevObj = cart.items[index];
                cart.totalPrice -= prevObj.itemPrice;
                cart.totalQuantity -= prevObj.quantity;
                cart.items.splice(index, 1);
            }
        },
        showHideCart: (cart, action) => {
            cart.show = action.payload;
        }
    }
})

export default slice.reducer;

export const { addProduct, removeProduct, deleteProduct, showHideCart } = slice.actions
