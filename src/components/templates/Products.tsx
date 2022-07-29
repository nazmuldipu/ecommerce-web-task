import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../stores/reducers/cartSlice";

import { Product, ProductState } from "../../types";
import { ProductCard } from "../organisms";

function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state: ProductState) => state.entities.products.items);

    const addToCart = (product: Product) => {
        dispatch(addProduct(product));
    }

    return (
        <section className="prduct-list grid p-4">
            {
                products.length > 0 ?
                    products.map(
                        (item, index) =>
                        (
                            <ProductCard key={`product-${index}`} product={item} onActionClick={() => addToCart(Object.assign({}, item))} />
                        )
                    ) :
                    <span className="ShoppingCart__notification--isEmpty">
                        Sorry, we currently don't have any items for sale
                    </span>
            }
        </section>
    );
}

export default Products;