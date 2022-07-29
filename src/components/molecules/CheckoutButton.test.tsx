// Imports
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';

// To Test
import CheckoutButton from "./CheckoutButton";

describe("CheckoutButton molecule component", () => {
    it("should render the component", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<CheckoutButton onClick={handleClick} />)
        const comp = getByTestId("check-out-btn");

        expect(comp).toHaveClass("check-out");
        expect(comp.innerHTML).toBe("Checkout");
    });
    it("should trigger onClick props function", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<CheckoutButton onClick={handleClick} />)
        const comp = getByTestId("check-out-btn");
        fireEvent.click(comp);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

})

