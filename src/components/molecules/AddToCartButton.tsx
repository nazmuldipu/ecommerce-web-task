import { FormatNumber } from "../../utils/utils";

interface AddToCartProps {
    price: number;
    onClick: (params: any) => any;
}



function AddToCart({ price, onClick }: AddToCartProps) {


    return (
        <div className="product_card--action flex cursor-pointer" onClick={onClick}>
            <div>Add To Cart</div>
            <div className="product_card--price">${FormatNumber(price)}</div>
        </div>
    );
}

export default AddToCart;