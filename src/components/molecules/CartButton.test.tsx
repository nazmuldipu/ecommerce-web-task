// Imports
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';

// To Test
import CartButton from "./CartButton";

describe("CartButton Molecule component", () => {
    it("should render CartButton component", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<CartButton totalQuantity={10} onClick={handleClick} />)
        const comp = getByTestId("cart-button");

        expect(comp).toHaveClass("navbar--cart-button");
        expect(comp.children.length).toBe(2);
    });

    it("should have totalQuantity component", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<CartButton totalQuantity={10} onClick={handleClick} />)
        const comp = getByTestId("cart-button-quantity");

        expect(comp).toBeInTheDocument();
        expect(comp.innerHTML).toBe("10");
    })

    it("should trigger onClick function", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<CartButton totalQuantity={10} onClick={handleClick} />)
        const comp = getByTestId("cart-button");

        fireEvent.click(comp);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})