import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const initialState = {
  allUsers: [],
  authUser: {},
  local: false,
  isLoggedIn: false,
  admin: true,
  status: "idle",
  error: "",
};

const localCheck = localStorage.getItem("allUsers");

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
      const { auth } = action.payload;
      state.status = "idle";
      state.isLoggedIn = true;
      state.authUser = auth;
      localStorage.setItem("appUser", JSON.stringify(auth));
      state.local = !state.local;
    },
    getLocal: (state, action) => {
      state.allUsers = action.payload;
      state.status = "idle";
    },
    assignTask: (state, action) => {
      const { id, taskData } = action.payload;
      let task = [];
      const users = state.allUsers.map((x) => (x.id === id ? { ...x, tasks: task.concat(taskData) } : x));
      state.allUsers = users;
      localStorage.setItem("allUsers", JSON.stringify(users));
    },
    addTask: (state, action) => {
      const { id, taskData } = action.payload;
      const users = state.allUsers.map((x) => {
        if (x.id === id) {
          x.tasks = x.tasks.concat(taskData);
        }
        return x;
      });
      state.allUsers = users;
      localStorage.setItem("allUsers", JSON.stringify(users));
    },
    acceptTask: (state, action) => {
      const { id } = action.payload;
      const response = state.authUser.tasks;

      response.find((x) => x.id === id);
      response.status = "accepted";
    },
    declineTask: (state, action) => {
      const { id } = action.payload;
      const response = state.authUser.tasks;

      response.find((x) => x.id === id);
      response.status = "declined";
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
        localCheck ? console.log("users found") : localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export const selectAllUsers = (state) => state.users;
export const { signIn, getLocal, assignTask, acceptTask, declineTask, addTask } = UsersSlice.actions;

export default UsersSlice.reducer;
