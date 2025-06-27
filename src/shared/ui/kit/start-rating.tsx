import clsx from "clsx";
import { Star, StarHalf } from "lucide-react";

type StarRatingProps = {
  value: number;
  max?: number;
  widthStar?: number;
  className?: string;
};

export default function StarRating({ value, max = 5, className, widthStar = 20 }: StarRatingProps) {
  const fullStar = Math.floor(value);
  const hasHalfStar = value - fullStar >= 0.1;
  const emptyStar = max - fullStar - (hasHalfStar ? 1 : 0);

  return (
    <div className={clsx('flex', className)}>
      {[...Array(fullStar)].map((_, i) => {
        return (
          <Star className="text-orange-500" width={widthStar} fill="#FF6900" key={"full-" + i} />
        );
      })}
      {hasHalfStar && (
        <>
          <StarHalf fill="#FF6900" width={widthStar} stroke="#FF6900" key={"half"} />
        </>
      )}
      {[...Array(emptyStar)].map((_, i) => {
        return <Star fill="#E5E5E5" width={widthStar} stroke="#E5E5E5" key={"empty-" + i} />;
      })}
    </div>
  );
}
