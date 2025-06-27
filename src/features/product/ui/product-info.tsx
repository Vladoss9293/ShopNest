import type { ApiSchemas } from "@/shared/api/schema";
import { Badge } from "@/shared/ui/kit/badge";
import ProductCode from "@/shared/ui/kit/product-code";
import ReviewCount from "@/shared/ui/kit/review-count";
import { Skeleton } from "@/shared/ui/kit/skeleton";
import StarRating from "@/shared/ui/kit/start-rating";
import { StockStatus } from "@/shared/ui/kit/stock-status";

export default function ProductInfo({
  productData,
}: {
  productData?: ApiSchemas["Product"];
}) {
  return (
    <div className="bg-white py-7 px-8">
      {productData ? (
        <div>
          <div className="text-justify line-clamp-2">
            <Badge className="float-left mt-1 mr-3" />
            <p className="text-3xl font-bold w-[75%]">
              Смартфон Apple iPhone 14 128Gb Midnight
            </p>
          </div>
          <div className="mt-7 flex items-center justify-between">
            <div className="flex items-center gap-10">
              <StockStatus Available={true} />
              <div className="flex gap-4">
                <StarRating value={3} className="" />
                <ReviewCount numberOfReviews={83} />
              </div>
            </div>
            <ProductCode id={productData.id} />
          </div>
        </div>
      ) : (
        <div>
          <Skeleton className="h-10" />
        </div>
      )}
    </div>
  );
}
