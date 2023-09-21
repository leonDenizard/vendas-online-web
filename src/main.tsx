import "../src/modules/login/styles/root.css";
import "boxicons";

import type { Router as RemixRouter } from "@remix-run/router";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { loginRoutes } from "./modules/login/routes";

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <h1>Main</h1>,
    errorElement: <h1>Pagina não encontrda</h1>,
  },
];

const router: RemixRouter = createBrowserRouter([
  ...loginRoutes,
  ...mainRoutes,
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
