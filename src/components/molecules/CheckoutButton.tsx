interface CheckoutButtonProps {
    onClick: () => any;
}

function CheckoutButton({ onClick }: CheckoutButtonProps) {
    return (
        <button className="check-out" onClick={onClick}>Checkout</button>
    );
}

export default CheckoutButton;