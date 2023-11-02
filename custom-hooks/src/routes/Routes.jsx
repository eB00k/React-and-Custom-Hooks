import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseOnlineStatus, Home, UseLocalStorage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/useOnlineStatus",
    element: <UseOnlineStatus />,
  },
  {
    path: "/useLocalStorage",
    element: <UseLocalStorage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
