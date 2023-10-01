import { RouteObject } from "react-router-dom";

import FirstScreen from ".";

export const firstScreenRoutes: RouteObject[] = [
  {
    path: "/",
    element: <FirstScreen />,
    errorElement: <h1>Pagina não encontrda</h1>,
  },
];
