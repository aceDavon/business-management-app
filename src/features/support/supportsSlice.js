import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticket: [],
  status: "idle",
};

const supportsSlice = createSlice({
  name: "support",
  initialState,
  reducers: {},
});

export default supportsSlice.reducer;
