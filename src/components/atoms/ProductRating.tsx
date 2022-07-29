function ProductRating({ rating }: { rating: number }) {
    return (
        <div className="product-rating flex">
            {
                [...Array(rating)].map((e, i) => {
                    return <img key={`ProductRating${i}`} src='/star-fill.svg' className="logo" alt="star" />
                })
            }
            {[...Array(5-rating)].map((e, i) => {
                return <img key={`ProductRating${i}`} src='/star-gray.svg' className="logo" alt="star" />
            })}
        </div>
    );
}

export default ProductRating;