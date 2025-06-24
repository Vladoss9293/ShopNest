import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/kit/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import type { ApiSchemas } from "@/shared/api/schema";
import { useEffect, useRef, useState } from "react";
import { useProductHeaderVisibility } from "../model/use-product-header";
import { productHeaderTabs } from "../model/constants";
import clsx from "clsx";

export function ProductLayout({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {

  return (
    <div className="container mx-auto px-10 gap-0.5 grid">
      {header}
      {children}
    </div>
  );
}

export function ProductLayoutHeader({
  onTabClick,
}: {
  onTabClick: (id: number) => void;
}) {
  const { cursorRef, isTopHidden } = useProductHeaderVisibility();
  const [isSelectTabs, setIsSelectTabs] = useState(1);

  return (
    <>
      <div ref={cursorRef} className="hidden" />
      <div
        className={`sticky  top-0 z-20 w-full h-20 grid grid-cols-[1fr_1.2fr_1.2fr_1fr_1fr_1fr]
          font-sans text-md transition-shadow ${isTopHidden ? "shadow" : ""}`}
      >
        {productHeaderTabs.map((tab) => {
          return (
            <ProductLayoutHeaderTabs
              key={tab.id}
              onClick={() => {
                setIsSelectTabs(tab.id)
                onTabClick(tab.id);
              }}
              className={
                tab.id === isSelectTabs
                  ? "bg-white hover:bg-gray-200 border-b-4 border-green-600"
                  : "bg-white text-black/50 hover:bg-gray-100"
              }
              isFirst={tab.id === 1 && true}
              text={tab.text}
            />
          );
        })}
      </div>
    </>
  );
}

export function ProductLayoutHeaderTabs({
  text,
  isFirst,
  ...props
}: {
  text: string;
  isFirst?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(
        "relative cursor-pointer h-full w-full flex items-center justify-center mx-auto",
        props.className
      )}
    >
      {!isFirst && (
        <span
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300"
          style={{ width: "1px", height: "40%" }}
        />
      )}
      <p>{text}</p>
    </div>
  );
}

export const ProductLayoutAbout = React.forwardRef<
  HTMLDivElement,
  {
    carousel: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { carousel } = props;

  return (
    <div ref={ref} className="w-full grid grid-cols-[1fr_1.4fr] gap-1">
      <div className="w-full bg-white h-250 p-10">{carousel}</div>
      <div className="w-full bg-white">
        52
      </div>
    </div>
  );
});

ProductLayoutAbout.displayName = "ProductLayoutContent";

export function ProductLayoutAboutCarousel({
  images,
}: {
  images: ApiSchemas["Product"]["imageUrl"];
}) {
  const carouselRef = useRef(null);

  useEffect(() => {
    console.log(carouselRef.current);
  }, [carouselRef]);

  return (
    <Carousel
      ref={carouselRef}
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 15000,
        }),
      ]}
      className="mx-auto flex items-center h-150"
    >
      <CarouselContent className="mx-auto flex items-center">
        {images &&
          images.map((img, index) => (
            <CarouselItem
              className="w-full h-full flex items-center"
              key={index}
            >
              <img src={img} alt="" />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext
        variant={"default"}
        className="bg-white w-10 h-10 shadow hover:shadow-xl/10"
      />
      <CarouselPrevious
        variant={"default"}
        className="bg-white w-10 h-10 shadow hover:shadow-xl/10"
      />
    </Carousel>
  );
}
