import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseOnlineStatus, Home } from "../pages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/useOnlineStatus",
    element: <UseOnlineStatus />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
