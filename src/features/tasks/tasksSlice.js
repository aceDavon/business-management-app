import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import intervalToDuration from "date-fns/intervalToDuration";

let initialId = 0;
let categoryId = 0;
const initialState = {
  tasks: [],
  categories: [],
  status: "idle",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        const taskData = {
          ...action.payload,
          id: ++initialId,
          completed: false,
        };

        state.tasks = state.tasks.concat(taskData);
      },
      prepare(title, description, priority, category, isoDate, username) {
        return {
          payload: {
            title,
            description,
            priority,
            category,
            date: intervalToDuration({
              start: new Date(),
              end: isoDate,
            }),
            username,
          },
        };
      },
    },
    completeTask: (state, action) => {
      const completedTask = state.tasks.find((x) => x.id === action.payload);

      completedTask.completed = !completedTask.completed;
    },
    removeTask: (state, action) => {
      const filteredArr = state.tasks.filter((x) => x.id === action.payload);

      state.tasks = filteredArr;
    },
    createCategory: {
      reducer: (state, action) => {
        const newcategory = {
          ...action.payload,
          id: ++categoryId,
        };

        state.categories = state.categories.concat(newcategory);
      },
      prepare(title, description, username) {
        let weeks = 0;
        return {
          payload: {
            title,
            description,
            username,
            date: sub(new Date(), { weeks: ++weeks }).toDateString(),
          },
        };
      },
    },
  },
});

export const { addTask, completeTask, removeTask, createCategory } = tasksSlice.actions;
export const selectAllTasks = (state) => state.tasks;

export default tasksSlice.reducer;
