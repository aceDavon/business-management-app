import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const initialState = {
  allUsers: [],
  authUser: {},
  local: false,
  isLoggedIn: false,
  admin: false,
  status: "idle",
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const UsersData = await axios.get("https://fakestoreapi.com/users");
    return [...UsersData.data];
  } catch (error) {
    return error.message;
  }
});
const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.status = "idle";
      state.isLoggedIn = true;
      state.authUser = action.payload;
    },
    saveUser: (state, action) => {
      const authData = JSON.stringify(action.payload);
      localStorage.setItem("appUser", authData);
      state.local = !state.local;
    },
    getLocal: (state, action) => {
      state.authUser = action.payload;
      state.status = "idle";
      state.isLoggedIn = true;
      state.local = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "successful";
        let min = 1;
        const stateDate = action.payload.map((x) => {
          x.date = sub(new Date(), { minutes: min++ }).toISOString;
          return x;
        });
        state.allUsers = state.allUsers.concat(stateDate);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export const selectAllUsers = (state) => state.users;
export const { signIn, saveUser, getLocal } = UsersSlice.actions;

export default UsersSlice.reducer;
