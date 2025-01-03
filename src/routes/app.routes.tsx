import { Navigate, RouteObject } from "react-router-dom";
import { Home, UserDetails } from "./lazy";
import { Routes } from "./routes";

export const appRoutes = () => {
  return [
    {
      path: Routes.users,
      element: <Home />,
    },
    {
      path: Routes.userDetails,
      element: <UserDetails />,
    },
    { path: Routes.base, element: <Navigate to={Routes.users} replace /> },
  ] as RouteObject[];
};
