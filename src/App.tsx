import MainPage from "./components/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";


const router = createBrowserRouter([{
  path: "/",
  element: <MainPage />,
  errorElement: <ErrorPage />
}]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
