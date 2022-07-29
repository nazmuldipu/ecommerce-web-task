import { combineReducers } from 'redux';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

export default combineReducers({
    cart: cartReducer,
    products: productReducer
})