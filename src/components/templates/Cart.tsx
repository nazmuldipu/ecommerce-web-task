import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct, deleteProduct, showHideCart } from "../../stores/reducers/cartSlice";
import { Product, ProductState } from "../../types";
import { FormatInterger } from "../../utils/utils";
import { CheckoutButton } from "../molecules";
import { CartItem } from "../organisms";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state: ProductState) => state.entities.cart);

    const closeCart = () => {
        dispatch(showHideCart(false))
    }

    const addToCart = (product: Product) => {
        dispatch(addProduct(product));
    }

    const removeFromCart = (product: Product) => {
        dispatch(removeProduct(product))
    }

    const deleteFromCart = (product: Product) => {
        dispatch(deleteProduct(product));
    }

    const onCheckout = () => {
        console.log('Implement checkout call here');
    }

    return (
        <div className="cart w-full flex h-full">
            <div className="cart-body">
                <div className="cart--nav">
                    <button className="cart--close-btn" onClick={closeCart}>
                        <img src="/close.svg" className="logo" alt="Favorite" />
                    </button>
                    <div className="flex">
                        <div>
                            My Cart
                        </div>
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="pl-3">
                            <path d="M18 19.4218C18 19.6497 17.9122 19.8683 17.7559 20.0295C17.5996 20.1906 17.3876 20.2812 17.1666 20.2812H16.3332V21.1406C16.3332 21.3685 16.2454 21.5871 16.0891 21.7483C15.9328 21.9095 15.7208 22 15.4998 22C15.2787 22 15.0668 21.9095 14.9105 21.7483C14.7542 21.5871 14.6664 21.3685 14.6664 21.1406V20.2812H13.833C13.6119 20.2812 13.4 20.1906 13.2437 20.0295C13.0874 19.8683 12.9996 19.6497 12.9996 19.4218C12.9996 19.1939 13.0874 18.9753 13.2437 18.8141C13.4 18.6529 13.6119 18.5624 13.833 18.5624H14.6664V17.7037C14.6664 17.4758 14.7542 17.2572 14.9105 17.096C15.0668 16.9348 15.2787 16.8443 15.4998 16.8443C15.7208 16.8443 15.9328 16.9348 16.0891 17.096C16.2454 17.2572 16.3332 17.4758 16.3332 17.7037V18.5631H17.1666C17.3875 18.5631 17.5994 18.6536 17.7556 18.8146C17.9119 18.9756 17.9998 19.194 18 19.4218ZM18 6.01667V14.2661C18 14.494 17.9122 14.7126 17.7559 14.8738C17.5996 15.0349 17.3876 15.1255 17.1666 15.1255C16.9456 15.1255 16.7336 15.0349 16.5773 14.8738C16.421 14.7126 16.3332 14.494 16.3332 14.2661V6.87607H14.6664V9.45429C14.6664 9.68222 14.5786 9.90081 14.4223 10.062C14.266 10.2232 14.054 10.3137 13.833 10.3137C13.6119 10.3137 13.4 10.2232 13.2437 10.062C13.0874 9.90081 12.9996 9.68222 12.9996 9.45429V6.87607H4.99972V9.45429C4.99972 9.68222 4.91192 9.90081 4.75562 10.062C4.59933 10.2232 4.38735 10.3137 4.16632 10.3137C3.94528 10.3137 3.7333 10.2232 3.57701 10.062C3.42072 9.90081 3.33291 9.68222 3.33291 9.45429V6.87607H1.66681V20.2812H10.5001C10.7211 20.2812 10.9331 20.3717 11.0894 20.5329C11.2457 20.6941 11.3335 20.9127 11.3335 21.1406C11.3335 21.3685 11.2457 21.5871 11.0894 21.7483C10.9331 21.9095 10.7211 22 10.5001 22H0.833406C0.612373 22 0.400392 21.9095 0.244098 21.7483C0.0878039 21.5871 0 21.3685 0 21.1406V6.01447C0 5.78654 0.0878039 5.56795 0.244098 5.40678C0.400392 5.24561 0.612373 5.15506 0.833406 5.15506H3.37273C3.53618 3.73445 4.19931 2.42501 5.23645 1.4749C6.2736 0.524781 7.6127 0 9 0C10.3873 0 11.7264 0.524781 12.7635 1.4749C13.8007 2.42501 14.4638 3.73445 14.6273 5.15506H17.1666C17.276 5.15506 17.3844 5.17729 17.4855 5.22048C17.5866 5.26367 17.6785 5.32697 17.7559 5.40678C17.8333 5.48658 17.8947 5.58132 17.9366 5.68559C17.9784 5.78986 18 5.90161 18 6.01447V6.01667ZM12.942 5.15726C12.7846 4.19598 12.3021 3.32326 11.5801 2.6939C10.8581 2.06455 9.94326 1.71925 8.99786 1.71925C8.05247 1.71925 7.13764 2.06455 6.41564 2.6939C5.69364 3.32326 5.21116 4.19598 5.05376 5.15726H12.942Z" fill="#161D25" />
                        </svg>
                    </div>
                    <div></div>
                </div>
                <div className="cart--container">
                    {
                        cart.items.length > 0 ?
                            cart.items.map(
                                (item, index) =>
                                (<CartItem
                                    key={`cart-item${index}`}
                                    item={item}
                                    onAdd={() => addToCart(item.product)}
                                    onRemove={() => removeFromCart(item.product)}
                                    onDelete={() => deleteFromCart(item.product)} />)
                            ) :
                            <span className="ShoppingCart__notification--isEmpty">
                                Sorry, we currently don't have any items on your cart!
                            </span>
                    }
                </div>
                <div className="cart--offer">Hey get Free shipping on order over 250$</div>
                <div className="cart--footer flex">
                    <div className="cart--footer-price">
                        <div className="text-secondary text-sub">Sub total:</div>
                        <div className="cart--total">${FormatInterger(cart.totalPrice)}</div>
                    </div>
                    <CheckoutButton onClick={onCheckout} />
                </div>
            </div>
        </div >
    );
}

export default Cart;