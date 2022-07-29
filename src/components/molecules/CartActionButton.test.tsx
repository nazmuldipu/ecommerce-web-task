// Imports
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';

// To Test
import CartActionButton from "./CartActionButton";

describe("CartActionButton Molecules Components", () => {
    it("should render CartActionButton component", () => {
        const handleMinusClick = jest.fn();
        const handlePlusClick = jest.fn();
        const { getByTestId } = render(<CartActionButton quantity={10} onMinusClick={handleMinusClick} onPlusClick={handlePlusClick} />)
        const comp = getByTestId("cart-action-btn");

        expect(comp).toHaveClass("cart-actions");
        expect(comp.children.length).toBe(3);
    });

    it("should have minus component", () => {
        const handleMinusClick = jest.fn();
        const handlePlusClick = jest.fn();
        const { getByTestId } = render(<CartActionButton quantity={10} onMinusClick={handleMinusClick} onPlusClick={handlePlusClick} />)
        const comp = getByTestId("cart-action-btn-minus");
        expect(comp).toBeInTheDocument();
    })

    it("should have plus component", () => {
        const handleMinusClick = jest.fn();
        const handlePlusClick = jest.fn();
        const { getByTestId } = render(<CartActionButton quantity={10} onMinusClick={handleMinusClick} onPlusClick={handlePlusClick} />)
        const comp = getByTestId("cart-action-btn-plus");
        expect(comp).toBeInTheDocument();
    })

    it("should have quantity component", () => {
        const handleMinusClick = jest.fn();
        const handlePlusClick = jest.fn();
        const { getByTestId } = render(<CartActionButton quantity={10} onMinusClick={handleMinusClick} onPlusClick={handlePlusClick} />)
        const comp = getByTestId("cart-action-btn-quantity");
        expect(comp).toBeInTheDocument();
        expect(comp.innerHTML).toBe("10");
    })

    it("should trigger minus click function", () => {
        const handleMinusClick = jest.fn();
        const handlePlusClick = jest.fn();
        const { getByTestId } = render(<CartActionButton quantity={10} onMinusClick={handleMinusClick} onPlusClick={handlePlusClick} />)
        const comp = getByTestId("cart-action-btn-minus");
        fireEvent.click(comp);
        expect(handleMinusClick).toHaveBeenCalledTimes(1);
    })

    it("should trigger plus click function", () => {
        const handleMinusClick = jest.fn();
        const handlePlusClick = jest.fn();
        const { getByTestId } = render(<CartActionButton quantity={10} onMinusClick={handleMinusClick} onPlusClick={handlePlusClick} />)
        const comp = getByTestId("cart-action-btn-plus");
        fireEvent.click(comp);
        expect(handlePlusClick).toHaveBeenCalledTimes(1);
    })
});