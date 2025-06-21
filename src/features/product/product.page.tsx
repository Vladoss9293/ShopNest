import { useParams } from "react-router-dom";
import { UseProduct } from "./model/use-product";
import { ProductLayout, ProductLayoutContent, ProductLayoutHeader } from "./ui/product-layout";

function ProductPage() {
    const params = useParams<{ productId: string }>();
    const productId: string = String(params.productId);
    const { data, isPending } = UseProduct({productId});

  return (
    <ProductLayout header={<ProductLayoutHeader />}>
        <ProductLayoutContent>

        </ProductLayoutContent>
    </ProductLayout>
  );
}

export const Component = ProductPage;
