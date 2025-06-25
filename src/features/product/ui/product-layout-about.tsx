import React from "react";

export const ProductLayoutAbout = React.forwardRef<
  HTMLDivElement,
  {
    renderCarousel?: () => React.ReactNode;
    renderProductInfo?: () => React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { renderCarousel, renderProductInfo } = props;

  return (
    <div ref={ref} className="w-full grid grid-cols-[1fr_1.4fr] gap-1">
      <div className="w-full bg-white h-250 p-10">
        {renderCarousel && renderCarousel()}
      </div>
      <div className="w-full grid grid-rows-[repeat(9,1fr)]">
        {renderProductInfo && renderProductInfo()}
      </div>
    </div>
  );
});

ProductLayoutAbout.displayName = "ProductLayoutContent";
