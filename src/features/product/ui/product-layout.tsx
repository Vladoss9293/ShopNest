import type React from "react";

export function ProductLayout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-5 gap-0.5 grid">
      {header}
      {children}
    </div>
  );
}

export function ProductLayoutHeader() {
  return (
    <div className="w-full h-25 grid grid-cols-6 gap-0.5">
      <ProductLayoutHeaderMenu text="ПРО ТОВАР" />
      <ProductLayoutHeaderMenu text="ХАРАКТЕРИСТИКИ" />
      <ProductLayoutHeaderMenu text="ОТЗЫВЫ / ВОПРОСЫ" />
      <ProductLayoutHeaderMenu text="АКСЕССУАРЫ" />
      <ProductLayoutHeaderMenu text="СЕРВИСЫ" />
      <ProductLayoutHeaderMenu text="НАЛИЧИЕ" />
    </div>
  );
}

export function ProductLayoutHeaderMenu({
  text,
  ...props
}: {
  text: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="bg-white hover:bg-white/50 cursor-pointer h-full w-full flex items-center justify-center opacity-50"
    >
      <p>{text}</p>
    </div>
  );
}

export function ProductLayoutContent() {
    return (
        <div className="w-full grid grid-cols-2">
            <div>
                
            </div>
            <div>

            </div>
        </div>
    )
}
