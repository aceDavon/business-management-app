import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allusers: [],
  authUser: {},
  isLoggedIn: false,
  admin: false,
  status: "idle",
};

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default UsersSlice.reducer;
