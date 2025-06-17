import { HttpResponse } from "msw";
import type { ApiSchemas } from "../../schema";
import { http } from "../http";

const products: ApiSchemas['Product'][] = [
    {
        id: '1',
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 100,
        category: 'Category A',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isFavorite: false,
    },
    {
        id: '2',
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 200,
        category: 'Category B',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isFavorite: false,
    },
    {
        id: '3',
        name: 'Product 3',
        description: 'Description for Product 3',
        price: 300,
        category: 'Category C',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isFavorite: true,
    },
]

export const productsHandlers = [
    http.get('/products', async (ctx) => {
        const url = new URL(ctx.request.url);
        const page = Number(url.searchParams.get('page') || 1);
        const limit = Number(url.searchParams.get('limit') || 10);
        // const search = url.searchParams.get('search') || '';
        // const isFavorite = url.searchParams.get('isFavorite');


        const total = products.length;
        const totalPages = Math.ceil(total / limit)
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedProducts = products.slice(startIndex, endIndex)

        return HttpResponse.json({
            list: paginatedProducts,
            total,
            totalPages,
        })
    })
]