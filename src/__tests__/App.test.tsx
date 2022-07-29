// Imports
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

// To Test
import App from '../App';

describe('With React Testing Library', () => {
    const initialState = {
        entities: {
            cart: {
                items: [],
                totalPrice: 0,
                totalQuantity: 0,
                show: false
            },
            products: {
                items: [],
                total: 0
            }
        }
    };
    const mockStore = configureStore();
    let store;

    it('Renders main page correctly', async () => {
        // Setup
        store = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        // Pre Expcations
        const comp = getByTestId("app");
        expect(comp).toBeInTheDocument();
        expect(comp.children.length).toBe(2);
    });
});
