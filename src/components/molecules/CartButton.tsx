interface AddToCartProps {
    totalQuantity: number;
    onClick: (params: any) => any;
}

function CartButton({ totalQuantity, onClick }: AddToCartProps) {
    return (
        <button className="navbar--cart-button cursor-pointer relative flex" onClick={onClick} data-testid="cart-button">
            <div className="navbar--cart-items absolute" data-testid="cart-button-quantity">{totalQuantity}</div>
            <img src="/cart-button.svg" className="product_card--image" alt="cart-button icon" data-testid="cart-button-image"/>
        </button>
    );
}

export default CartButton;