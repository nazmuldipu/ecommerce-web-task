import { CartButton } from "../molecules";
import { useDispatch, useSelector } from "react-redux";
import { ProductState } from "../../types";
import { showHideCart } from "../../stores/reducers/cartSlice";

function Navbar() {
    const dispatch = useDispatch();
    const cart = useSelector((state: ProductState) => state.entities.cart);
    const displayCart = () => {
        dispatch(showHideCart(true))
    }

    return (
        <nav className=" flex flex-row-reverse p-4">
            <CartButton totalQuantity={cart.totalQuantity} onClick={displayCart} />
        </nav>
    );
}

export default Navbar;