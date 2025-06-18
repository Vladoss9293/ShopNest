import { delay, HttpResponse } from "msw";
import type { ApiSchemas } from "../../schema";
import { http } from "../http";

const generateProducts: ApiSchemas["Product"][] = Array.from({length: 100}, (_, i) => {
    return {
        id: `${i}`,
        name: `Product ${i}`,
        description: `Description for Product ${i}`,
        price: 100 * i,
        imageUrl:
          "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/catalog/product/l/e/lenovo_v15_g4_iru.jpg/w_1440",
        category: "Category A",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isFavorite: false,
    }
})

export const productsHandlers = [
  http.get("/products", async (ctx) => {
    const url = new URL(ctx.request.url);
    await delay(200);
    const page = Number(url.searchParams.get("page") || 1);
    const limit = Number(url.searchParams.get("limit") || 10);
    // const search = url.searchParams.get('search') || '';
    // const isFavorite = url.searchParams.get('isFavorite');

    const total = generateProducts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = generateProducts.slice(startIndex, endIndex);


    return HttpResponse.json({
      list: paginatedProducts,
      total,
      totalPages,
    });
  }),
];
