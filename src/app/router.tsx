import { createBrowserRouter, redirect } from "react-router-dom";
import { Providers } from "./providers";
import { App } from "./App";
import { ROUTES } from "@/shared/model/routes";
import { ProtectedRoute } from "./protected-route";
import AppHeader from "@/features/header";
import { protectedLoader } from "./protected-loader";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        loader: protectedLoader,
        element: (
          <>
            <AppHeader />
            <ProtectedRoute />
          </>
        ),
        children: [
          {
            path: ROUTES.PRODUCTS,
            lazy: () => import("@/features/products-list/products-list.page"),
          },
        ],
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.PRODUCTS),
      },
    ],
  },
]);
