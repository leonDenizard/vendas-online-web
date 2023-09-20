import "../src/modules/login/styles/root.css";
import "boxicons";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
