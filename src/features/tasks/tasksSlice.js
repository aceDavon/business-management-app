import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  status: "idle",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;
