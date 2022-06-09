import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns/esm";

const initialState = {
  issues: [],
  status: "idle",
};

const IssuesSlice = createSlice({
  name: "Issues",
  initialState,
  reducers: {
    addIssue: (state, action) => {
      let arr = action.payload;
      let min = 1;
      arr.date = sub(new Date(), { minutes: min++ }).toISOString();

      state.issues = state.issues.concat(arr);
    },
  },
});

export const { addIssue } = IssuesSlice.actions;
export const selectAllIssues = (state) => state.issues;

export default IssuesSlice.reducer;
