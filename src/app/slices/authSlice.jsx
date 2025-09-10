import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  // initialState: { token: null },
  reducers: {
    setCredentials: (state, action) => {
      console.log(action);

      const { accessToken } = action.payload;
      state.token = accessToken;

      localStorage.setItem("token", JSON.stringify(accessToken));
    },
    logout: (state, action) => {
      state.token = null;

      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
