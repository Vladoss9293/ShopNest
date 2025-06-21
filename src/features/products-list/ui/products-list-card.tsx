import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { ShoppingCart } from "lucide-react"
import { href, Link } from "react-router-dom";

interface ProductsListCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

export function ProductsListCard({ product }: ProductsListCardProps) {
  return (
    <div className="flex px-4 flex-col bg-white">
      <span className="opacity-50 text-sm text-right pr-2">
        код: {product.id}
      </span>
      <div className="h-60 flex items-center justify-center">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="pt-1">
        <p className="line-clamp-2 text-sm">
          <Link to={href(ROUTES.PRODUCT, { productId: String(product.id) })}>
            {product.name}
          </Link>
        </p>
      </div>
      <div className="flex justify-between py-2 items-center">
        <div className="">
          <span className="text-2xl font-semibold">{product.price}</span>
          <span className="text-lg font-semibold">₴</span>
        </div>
        <div>
            <Button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white"><ShoppingCart /></Button>
        </div>
      </div>
    </div>
  );
}
