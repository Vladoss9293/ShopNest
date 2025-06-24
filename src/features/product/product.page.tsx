import { useParams } from "react-router-dom";
import { UseProduct } from "./model/use-product";
import {
  ProductLayout,
  ProductLayoutAbout,
  ProductLayoutAboutCarousel,
  ProductLayoutHeader,
} from "./ui/product-layout";
import { useRef } from "react";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";

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

  const { data, isPending } = UseProduct({ productId });

  return (
    <ProductLayout header={<ProductLayoutHeader onTabClick={handleTabClick} />}>
      <section className="scroll-mt-20" ref={sectionRefs.about}>
        <ProductLayoutAbout
          carousel={
            data?.imageUrl && (
              <ProductLayoutAboutCarousel images={data?.imageUrl} />
            )
          }
        />
      </section>
    </ProductLayout>
  );
}

export const Component = ProductPage;
