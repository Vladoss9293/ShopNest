import { useParams } from "react-router-dom";
import { useProduct } from "./model/use-product";
import { ProductLayout } from "./ui/product-layout";
import { GalleryCarousel } from "@/shared/ui/kit/carousel";
import { ProductLayoutHeader } from "./ui/product-layout-header";
import { ProductLayoutAbout } from "./ui/product-layout-about";
import ProductInfo from "./ui/product-info";
import { useProductSectionsNavigation } from "./model/use-product-sections-navigation";
import { productTabsData } from "./model/constants";

function ProductPage() {
  const params = useParams<{ productId: string }>();
  const productId: string = String(params.productId);

  const { handleTabClick, refs, activeTab } = useProductSectionsNavigation();

  const { data } = useProduct({ productId });

  return (
    <ProductLayout
      header={
        <ProductLayoutHeader
          activeTab={activeTab}
          onTabClick={handleTabClick}
          tabs={productTabsData}
        />
      }
    >
      <section className="scroll-mt-20" ref={refs.aboutRef}>
        <ProductLayoutAbout
          renderCarousel={() => {
            return (
              data?.imageUrl && <GalleryCarousel images={data?.imageUrl} />
            );
          }}
          renderProductInfo={() => {
            return <ProductInfo productData={data} />;
          }}
        />
      </section>
    </ProductLayout>
  );
}

export const Component = ProductPage;
