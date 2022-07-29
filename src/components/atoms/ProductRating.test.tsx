// Imports
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// To Test
import ProductRating from './ProductRating';

describe('ProductRating Atom Components', () => {

    it("Should Render ProductRating Component", async () => {
        const { getByTestId } = render(<ProductRating rating={5} />)
        const comp = getByTestId("product-rating");

        expect(comp).toHaveClass('product-rating');
    });

    it("Should have 5 child components", async () => {
        const { getByTestId } = render(<ProductRating rating={5} />)
        const comp = getByTestId("product-rating");

        expect(comp.children.length).toBe(5);
    });

    it("Should have 3 filled star and 2 gray star", async () => {
        const { getAllByTestId } = render(<ProductRating rating={3} />)
        const comp = getAllByTestId("product-rating");
        const filledStart = getAllByTestId("product-rating-star-fill");
        const grayStart = getAllByTestId("product-rating-star-gray");

        expect(comp.length).toBe(1);
        expect(filledStart.length).toBe(3);
        expect(grayStart.length).toBe(2);

    });
});