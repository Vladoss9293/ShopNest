import clsx from "clsx";
import { Star } from "lucide-react";

type StarRatingProps = {
  value: number;
  max?: number;
  widthStar?: number;
  className?: string;
};

export function StarRating({
  value,
  max = 5,
  className,
  widthStar = 20,
}: StarRatingProps) {
  const fullStar = Math.floor(value);
  const hasHalfStar = value - fullStar >= 0.1;
  const emptyStar = max - fullStar - (hasHalfStar ? 1 : 0);

  return (
    <div className={clsx("flex", className)}>
      {[...Array(fullStar)].map((_, i) => {
        return (
          <Star
            className="text-orange-500"
            width={widthStar}
            fill="#FF6900"
            key={"full-" + i}
          />
        );
      })}
      {hasHalfStar && (
        <>
          <CompactStarRating value={value} />
        </>
      )}
      {[...Array(emptyStar)].map((_, i) => {
        return (
          <Star
            fill="#E5E5E5"
            width={widthStar}
            stroke="#E5E5E5"
            key={"empty-" + i}
          />
        );
      })}
    </div>
  );
}

export function CompactStarRating({
  value,
  className,
  widthStar = 20,
  max = 5,
}: StarRatingProps) {
  const fillPercent = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={clsx("flex items-center", className)}>
      <div
        style={{
          width: `${widthStar}px`,
          height: `${widthStar}px`,
          position: "relative",
          display: "inline-block",
        }}
      >
        <Star
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            stroke: "#E5E5E5",
            fill: "#E5E5E5"
          }}
          width={widthStar}
          height={widthStar}
        />

        <Star
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            stroke: "#FF6900",
            fill: "#FF6900",
            maskImage: `linear-gradient(to right, black ${fillPercent}%, transparent ${fillPercent}%)`,
            WebkitMaskImage: `linear-gradient(to right, black ${fillPercent}%, transparent ${fillPercent}%)`,
          }}
          width={widthStar}
          height={widthStar}
        />
      </div>
    </div>
  );
}
