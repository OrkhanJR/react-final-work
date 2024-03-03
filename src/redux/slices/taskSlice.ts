import { createSlice } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  title: string;
  description?: string ;
};

type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: JSON.parse(localStorage.getItem("tasks") ?? "[]"),
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
    deleteTask: (state, action) => {
      const taskIdToDelete = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const taskToEdit = state.tasks.find((task) => task.id === id);

      if (taskToEdit) {
        taskToEdit.title = title;
        taskToEdit.description = description;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
        if (taskToEdit?.title === "") {
          taskToEdit.title = "task title";
        }
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
