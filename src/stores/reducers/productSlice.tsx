import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../types';

const dynamicallyLoadedItems: Product[] = [
    { id: 1, category: "Electironics", name: "Harman Kardon Speaker", size: "Medium", image: "/HarmanKardonSpeaker.png", price: 1725.00, oldPrice: 2000, rating: 4, isFavorite: false, onSale: false },
    { id: 2, category: "Fashion", name: "Women Yellow Turtleneck", size: "Large", image: "/WomenYellowTurtleneck.png", price: 1250.00, oldPrice: 1300, rating: 3, isFavorite: true, onSale: true },
    { id: 3, category: "Electironics", name: "Garmin Watch Fit X", size: "Small", image: "/GarminWatchFitX.png", price: 2250.00, oldPrice: 2500, rating: 5, isFavorite: false, onSale: true },
    { id: 4, category: "Electironics", name: "Airpods 2nd Gen", size: "Medium", image: "/Airpods2ndGen.png", price: 3250.00, oldPrice: 3500, rating: 2, isFavorite: true, onSale: false },
    { id: 5, category: "Electironics", name: "iPhone XS Max Pro", size: "Small", image: "/iPhoneXSMaxPro.png", price: 10250.00, oldPrice: 12000, rating: 4, isFavorite: false, onSale: false },
    { id: 6, category: "Electironics", name: "Beats by Dre C 3450", size: "Small", image: "/BeatsbyDreC3450.png", price: 4450.00, oldPrice: 5000, rating: 4, isFavorite: false, onSale: false },
    { id: 7, category: "Electironics", name: "Apple Watch 4 2020", size: "Large", image: "/AppleWatch42020.png", price: 3150.00, oldPrice: 4000, rating: 4, isFavorite: true, onSale: false },
    { id: 8, category: "Electironics", name: "Samsung Galaxy Watch 3", size: "Medium", image: "/SamsungGalaxyWatch3.png", price: 2150.00, oldPrice: 2700, rating: 4, isFavorite: false, onSale: true },
];

const slice = createSlice({
    name: 'product',
    initialState: {
        items: dynamicallyLoadedItems,
        total: dynamicallyLoadedItems.length
    },
    reducers: {
        toogleFav: (product, action) => {
            const index = product.items.findIndex(c => c.id === action.payload.id);
            if (index >= 0) {
                product.items.splice(index, 1, { ...action.payload, isFavorite: !action.payload.isFavorite })
            }
        }
    }
})
export const {
    toogleFav
} = slice.actions;

export default slice.reducer;