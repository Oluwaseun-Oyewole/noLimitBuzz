import { createBrowserRouter, Navigate } from "react-router-dom";
import { userLoader, userLoaderDetails } from "../loaders";
import ErrorPage from "../pages/Error";
import { Home, UserDetails } from "./lazy";
import { Routes } from "./routes";

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Navigate to={Routes.users} />,
    errorElement: <ErrorPage />,
  },
  {
    path: Routes.users,
    element: <Home />,
    loader: userLoader,
  },
  {
    path: Routes.userDetails,
    element: <UserDetails />,
    //@ts-ignore
    loader: userLoaderDetails,
  },
]);

export default routes;
