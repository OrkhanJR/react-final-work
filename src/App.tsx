import MainPage from "./components/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Task from "./components/MainPage/SideBar/TaskLists/Task/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    // loader:
    children: [
      {
        path: "tasks/:taskId",
        element: <Task />
    
      },
     
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
