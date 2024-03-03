import MainPage from "./components/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import EditPage from "./components/EditPage/EditPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "tasks/:taskId/Details",
        element: <DetailsPage />,
      },
      {
        path: "tasks/:taskId/Edit",
        element: <EditPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
