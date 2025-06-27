import { useParams } from "react-router-dom";
import { useProduct } from "./model/use-product";
import { ProductLayout } from "./ui/product-layout";
import { useRef } from "react";
import { useScrollToTop } from "@/shared/lib/hooks/use-scroll-to-top";
import { GalleryCarousel } from "@/shared/ui/kit/carousel";
import { ProductLayoutHeader } from "./ui/product-layout-header";
import { ProductLayoutAbout } from "./ui/product-layout-about";
import ProductInfo from "./ui/product-info";

function ProductPage() {
  const params = useParams<{ productId: string }>();
  const productId: string = String(params.productId);
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
  };

  const { scrollToElement: scrollToAbout } = useScrollToTop(sectionRefs.about);

  const handleTabClick = (id: number) => {
    const actions: Record<number, () => void> = {
      1: scrollToAbout,
    };

    actions[id]?.();
  };

  const { data } = useProduct({ productId });

  return (
    <ProductLayout header={<ProductLayoutHeader onTabClick={handleTabClick} />}>
      <section className="scroll-mt-20" ref={sectionRefs.about}>
        <ProductLayoutAbout
          renderCarousel={() => {
            return (
              data?.imageUrl && <GalleryCarousel images={data?.imageUrl} />
            );
          }}
          renderProductInfo={() => {
            return (
              <ProductInfo productData={data} />
            )
          }}
        />
      </section>
    </ProductLayout>
  );
}

export const Component = ProductPage;
