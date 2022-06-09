import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns/esm";

let initialId = 0;
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
      arr.id = ++initialId;
      arr.resolved = false;

      state.issues = state.issues.concat(arr);
    },
    resolveIssue: (state, action) => {
      const issue = state.issues.find((resolved) => resolved.id === action.payload);

      issue.resolved = !issue.resolved;
    },
    removeIssue: (state, action) => {
      const filterArr = state.issues.filter((x) => x.id !== action.payload);
      state.issues = filterArr;
    },
  },
});

export const { addIssue, resolveIssue, removeIssue } = IssuesSlice.actions;
export const selectAllIssues = (state) => state.issues;

export default IssuesSlice.reducer;
