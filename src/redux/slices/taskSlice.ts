import { createSlice } from "@reduxjs/toolkit";

export type Task = {
  creationDate: string;
  id: string;
  title: string;
  description?: string;
  status: boolean;
  checkStatus: boolean;
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
      }
    },
    changeStatus: (state, action) => {
      const taskId = action.payload;
      const taskToChange = state.tasks.find((task) => task.id === taskId);

      if (taskToChange) {
        taskToChange.status = !taskToChange.status;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },

    changeCheckStatus: (state, action) => {
      const taskId = action.payload;
      const taskToChange = state.tasks.find((task) => task.id === taskId);
      if(taskToChange) {
        taskToChange.checkStatus = !taskToChange.checkStatus;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, deleteTask, editTask, changeStatus,changeCheckStatus } =
  taskSlice.actions;

export default taskSlice.reducer;
