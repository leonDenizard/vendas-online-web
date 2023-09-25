import type { Router as RemixRouter } from "@remix-run/router";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { loginRoutes } from "./modules/login/routes";
import { useNotification } from "./shared/hooks/useNotification";

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

function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
