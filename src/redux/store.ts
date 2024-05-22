import { configureStore } from '@reduxjs/toolkit';
import {alertSlice, productSlice} from './features';
// import {todoSlice} from "@redux/features/todolist";
import { appBarSlice, activeComponentSlice } from './dashboard'
export const store = configureStore({
    reducer: {
        alert: alertSlice.reducer,
        product: productSlice.reducer,
        appBar: appBarSlice.reducer,
        activeComponent: activeComponentSlice.reducer

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;