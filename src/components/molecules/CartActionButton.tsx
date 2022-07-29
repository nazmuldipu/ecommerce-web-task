interface CartActionButtonProps {
    quantity: number;
    onMinusClick: () => any;
    onPlusClick: () => any;
}

function CartActionButton({ quantity, onMinusClick, onPlusClick }: CartActionButtonProps) {
    return (
        <div className="cart-actions">
            <button className="cart-actions-btn" onClick={onMinusClick}>
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2H16" stroke="#161D25" strokeWidth="2.5" />
                </svg>
            </button>
            <span className="cart-actions--quantity">{quantity}</span>
            <button className="cart-actions-btn" onClick={onPlusClick}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.38462 8.38462V1H9.61539V8.38462H17V9.61539H9.61539V17H8.38462V9.61539H1V8.38462H8.38462Z" fill="#161D25" stroke="#161D25" />
                </svg>
            </button>
        </div>
    );
}

export default CartActionButton;