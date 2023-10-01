import type { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { firstScreenRoutes } from "./modules/firstScreen/routes";
import { loginRoutes } from "./modules/login/routes";
import { useNotification } from "./shared/hooks/useNotification";

const router: RemixRouter = createBrowserRouter([
  ...loginRoutes,
  ...firstScreenRoutes,
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
