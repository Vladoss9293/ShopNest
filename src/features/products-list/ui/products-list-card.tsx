import type { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/model/routes";
import { Badge } from "@/shared/ui/kit/badge";
import { Button } from "@/shared/ui/kit/button";
import PriceDiscount from "@/shared/ui/kit/price-discount";
import ProductCode from "@/shared/ui/kit/product-code";
import ReviewCount from "@/shared/ui/kit/review-count";
import { CompactStarRating } from "@/shared/ui/kit/star-rating";
import { ShoppingCart } from "lucide-react";
import { href, Link } from "react-router-dom";

interface ProductsListCardProps {
  product: ApiSchemas["Product"];
}

export function ProductsListCard({ product }: ProductsListCardProps) {
  const discountPrice = Math.floor(
    product.price * (1 - product.discount / 100)
  );

  return (
    <div className="flex px-4 flex-col bg-white">
      <ProductCode id={product.id} />
      <div className="h-60 flex items-center justify-center">
        <img src={product.imageUrl[0] && product.imageUrl[0]} alt="" />
      </div>
      <div className="mt-2 pt-1 relative">
        <Badge className="float-left mt-0.5 mr-2 w-15" />
        <Link to={href(ROUTES.PRODUCT, { productId: String(product.id) })}>
          Смартфон Apple iPhone 14 128Gb Midnight
        </Link>
      </div>
      <div className="mt-1 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <CompactStarRating value={product.totalStars} widthStar={20} />
          <span className="opacity-50">{product.totalStars}</span>
        </div>
        <div>
          <ReviewCount numberOfReviews={product.totalReviews} className="w-12" />
        </div>
      </div>
      <div className="flex items-center justify-between py-2 mt-4">
        <div className="">
          <PriceDiscount price={product.price} discount={product.discount} />
          <span className="text-2xl font-semibold">
            {discountPrice} <span className="text-lg font-semibold">₴</span>
          </span>
        </div>
        <div>
          <Button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white">
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
}
