import "react-router-dom";

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    PRODUCT: '/product',
    PRODUCTS: '/products',
} as const;

export type PathParams = {
    [ROUTES.PRODUCT]: {
        productId: string;
    }
}

declare module 'react-router-dom' {
    interface Register {
        params: PathParams;
    }
}