import MainPage from "./components/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Task from "./components/MainPage/SideBar/TaskLists/Task/Task";
import EditPage from "./components/EditPage/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "tasks/:taskId",
        element: <Task />,
      },
      {
        path:"tasks/:taskId/Edit",
        element: <EditPage />
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
