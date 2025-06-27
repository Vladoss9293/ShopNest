import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import Autoplay from "embla-carousel-autoplay";

export function GalleryCarousel({
  images,
}: {
  images: string[];
}) {
  const carouselRef = useRef(null);

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