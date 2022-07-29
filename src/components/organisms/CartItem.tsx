import { CartItem as CartObj } from "../../types";
import { CartActionButton } from "../molecules";

interface CartItemProps {
    item: CartObj;
    onAdd: () => any;
    onRemove: () => any;
    onDelete: () => any;
}

function CartItem({ item, onRemove, onAdd, onDelete }: CartItemProps) {
    return (
        <div className="cart-item">
            <div className="cart-item--picture">
                <img src={item.product.image} className="cart-item--image h-full" alt={item.product.name} />
            </div>
            <div className="cart-item--details">
                <div className="cart-item--name">{item.product.name}</div>
                <div className="cart-item--size">Size: <span>{item.product.size}</span></div>
                <div className="cart-item--price">${item.product.price} <span>${item.product.oldPrice}</span></div>
            </div>
            <div className="cart-item--actions">
                <button className="cart-actions-btn cart-actions-btn-delete" onClick={onDelete}>
                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 5V3C4 2.46957 4.21071 1.96086 4.58579 1.58579C4.96086 1.21071 5.46957 1 6 1H10C10.5304 1 11.0391 1.21071 11.4142 1.58579C11.7893 1.96086 12 2.46957 12 3V5M15 5V19C15 19.5304 14.7893 20.0391 14.4142 20.4142C14.0391 20.7893 13.5304 21 13 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V5H15Z" stroke="#161D25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <CartActionButton quantity={item.quantity} onMinusClick={onRemove} onPlusClick={onAdd} />
            </div>
        </div>
    );
}

export default CartItem;