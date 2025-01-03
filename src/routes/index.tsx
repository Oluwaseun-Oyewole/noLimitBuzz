import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout";
import ErrorPage from "../pages/Error";
import { appRoutes } from "./app.routes";
import { Routes } from "./routes";

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [...appRoutes()],
  },
]);

export default routes;
