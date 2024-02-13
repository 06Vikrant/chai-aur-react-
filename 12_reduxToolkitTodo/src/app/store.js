// Created a store
import { configureStore } from '@reduxjs/toolkit';
//3. Store needs the knowledge of those reducers
import todoReducer from '../features/todo/todoSlice';

// method to export
export const store = configureStore({
    reducer: todoReducer
})