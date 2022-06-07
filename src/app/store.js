import { configureStore } from "@reduxjs/toolkit";
import issuesReducer from "../features/issues/issuesSlice";
import tasksReducer from "../features/tasks/tasksSlice";
import supportsReducer from "../features/support/supportsSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    issues: issuesReducer,
    support: supportsReducer,
    tasks: tasksReducer,
    users: usersReducer,
  },
});
