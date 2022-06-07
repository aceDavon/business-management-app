import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  issues: [],
  status: "idle",
};

const IssuesSlice = createSlice({
  name: "Issues",
  initialState,
  reducers: {},
});

export default IssuesSlice.reducer;
