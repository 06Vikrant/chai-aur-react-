// This store tracks our authentication
import { createSlice } from '@reduxjs/toolkit'

// i.e, user is authenticated or not we'll ask from store
const initialState = {
    status: false,
    userData: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const { login, logout } = authSlice.actions;

export default  authSlice.reducer;

