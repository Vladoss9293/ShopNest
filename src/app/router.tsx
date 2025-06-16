import { createBrowserRouter, redirect } from "react-router-dom";
import { Providers } from "./providers";
import { App } from "./App";
import { ROUTES } from "@/shared/model/routes";


export const router = createBrowserRouter([
    {
        element: (
            <Providers>
                <App />
            </Providers>
        ),
        children: [
            {
                path: ROUTES.PRODUCTS,
                lazy: () => import('@/features/products-list/products-list.page'),
            },
            {
                path: ROUTES.HOME,
                loader: () => redirect(ROUTES.PRODUCTS),
            }
        ]
    }
])