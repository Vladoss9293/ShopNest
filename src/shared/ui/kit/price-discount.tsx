export default function PriceDiscount({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) {
  return (
    <div className="flex items-center gap-1">
      <p className="line-through opacity-50">{price} &#x20B4;</p>
      <div className="bg-red-600 px-1 py-0.3 rounded-3xl flex items-center justify-center text-white">
        <span className="text-[12px]">-{discount}%</span>
      </div>
    </div>
  );
}
