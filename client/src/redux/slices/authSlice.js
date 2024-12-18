import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");
const initialUserInfo = JSON.parse(localStorage.getItem("user"));

const initialState = {
    userInfo: initialUserInfo,
    token: initialToken,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log("action.payload", action.payload);
            const { user, token } = action.payload;
            state.token = token;
            state.userInfo = JSON.parse(user);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
