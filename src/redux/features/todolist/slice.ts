import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './types';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

interface ProductState {
    notification: Product[];
}

const initialState: ProductState = {
    notification: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
            const id = uuidv4(); // Generate a unique ID
            const newProduct: Product = { ...action.payload, id };
            state.notification.push(newProduct);
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.notification = state.notification.filter((product) => product.id !== action.payload);
        },
    },
});

export const { addProduct, removeProduct  } = productSlice.actions;
export default productSlice.reducer;
export { productSlice };