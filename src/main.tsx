import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "@/shared/data/store/store";

import MenuPage from "@/menu";
import "./index.css";
import "./i18n";
import { AppHeader } from "./components/app-header";

const router = createBrowserRouter([
  {
    element: <AppHeader />,
    children: [
      {
        path: "/",
        element: <MenuPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
