import type { ApiSchemas } from "@/shared/api/schema";
import { Badge } from "@/shared/ui/kit/Badge";
import { Skeleton } from "@/shared/ui/kit/skeleton";

export default function ProductInfo({
  productData,
}: {
  productData?: ApiSchemas["Product"];
}) {
  return (
    <div className="bg-white p-10">
      {productData ? (
        <div className="text-justify">
          <Badge className="float-left mt-2 mr-3" />
          <p className="text-4xl font-bold">
            Смартфон Apple iPhone 14 128Gb Midnight
          </p>
        </div>
      ) : (
        <div>
          <Skeleton className="h-10" />
        </div>
      )}
    </div>
  );
}
