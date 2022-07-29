// Imports
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

// To Test
import AddToCart from "./AddToCartButton";

describe("AddToCart Molecules Component", () => {
    it("should render AddToCart Component", async () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<AddToCart price={100} onClick={handleClick} />)
        const comp = getByTestId("add-to-cart");

        expect(comp).toHaveClass('product_card--action');
    });

    it("should have text 'Add To Cart' ", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<AddToCart price={100} onClick={handleClick} />)
        const comp = getByTestId("add-to-cart-text");
        expect(comp.innerHTML).toBe("Add To Cart");
    })

    it("should have price $1,000.00 ", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<AddToCart price={1000} onClick={handleClick} />)
        const comp = getByTestId("add-to-cart-price");
        expect(comp.innerHTML).toBe("$1,000.00");
    })

    it('should calls onClick prop when clicked', () => {
        const handleClick = jest.fn()
        const { getByTestId } = render(<AddToCart price={100} onClick={handleClick} />)
        const comp = getByTestId("add-to-cart");
        fireEvent.click(comp)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
});