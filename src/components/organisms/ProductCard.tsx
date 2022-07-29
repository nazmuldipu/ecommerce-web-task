import { Product } from "../../types";
import ProductRating from "../atoms/ProductRating";
import { AddToCart } from "../molecules";

interface ProductCardProps {
    product: Product;
    onActionClick: () => any;
}

function ProductCard({ product, onActionClick }: ProductCardProps) {

    return (
        <div className="product_card flex">
            <div className="product_card--offer w-full flex">
                {
                    product.onSale ?
                        <div className="product_card--sale">
                            <div className="product_card--sale-text">SALE</div>
                        </div> :
                        <div></div>
                }
                <img src={product.isFavorite ? '/heart-fill.svg' : '/heart-line.svg'} className="logo" alt="Favorite" />
            </div>
            <div className="product_card--picture grid">
                <img src={product.image} className="product_card--image" alt={product.name} />
            </div>
            <div className="product_card--details">
                <div className="product_card--category">{product.category}</div>
                <div className="product_card--name">{product.name}</div>
                <ProductRating rating={product.rating} />
            </div>
            <AddToCart price={product.price} onClick={() => onActionClick()} />
        </div>
    );
}

export default ProductCard;