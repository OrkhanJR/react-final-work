import { createSlice } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  title: string;
}

type TaskState = {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
