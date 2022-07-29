interface AddToCartProps {
    totalQuantity: number;
    onClick: (params: any) => any;
}

function CartButton({ totalQuantity, onClick }: AddToCartProps) {
    return (
        <button className="navbar--cart-button cursor-pointer relative flex" onClick={onClick}>
            <div className="navbar--cart-items absolute">{totalQuantity}</div>
            <img src="/cart-button.svg" className="product_card--image" alt="cart-button icon" />
        </button>
    );
}

export default CartButton;