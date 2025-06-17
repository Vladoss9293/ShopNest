import { publicRqClient } from "@/shared/api/instance";
import { useEffect } from "react";

function ProductsListPage() {
  const ProductList = publicRqClient.useQuery('get', '/products', {
    params: {
      query: {
        page: 1,
        limit: 10
      }
    },
    
  });

  useEffect(() => {
    console.log(ProductList.data);
  }, [ProductList]);

  return (
    <div>Products</div>
  )
}

export const Component = ProductsListPage;