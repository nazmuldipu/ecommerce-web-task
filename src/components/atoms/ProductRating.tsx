function ProductRating({ rating }: { rating: number }) {
    return (
        <div className="product-rating flex" data-testid="product-rating">
            {
                [...Array(rating)].map((e, i) => {
                    return <img key={`ProductRating${i}`} src='/star-fill.svg' className="logo" alt="star" data-testid="product-rating-star-fill" />
                })
            }
            {[...Array(5 - rating)].map((e, i) => {
                return <img key={`ProductRating${i}`} src='/star-gray.svg' className="logo" alt="star" data-testid="product-rating-star-gray" />
            })}
        </div>
    );
}

export default ProductRating;