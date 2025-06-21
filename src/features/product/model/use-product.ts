import { publicRqClient } from "@/shared/api/instance";
import { useEffect } from "react";

export function UseProduct({ productId }: { productId: string }) {
  const { data, isPending } = publicRqClient.useQuery(
    "get",
    "/product/{productId}",
    {
      params: {
        path: {
          productId,
        },
      },
    }
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return {
    data,
    isPending,
  };
}
