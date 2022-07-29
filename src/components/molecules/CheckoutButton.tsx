interface CheckoutButtonProps {
    onClick: () => any;
}

function CheckoutButton({ onClick }: CheckoutButtonProps) {
    return (
        <button className="check-out" onClick={onClick} data-testid="check-out-btn">Checkout</button>
    );
}

export default CheckoutButton;