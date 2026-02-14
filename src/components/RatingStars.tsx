import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  reviews?: number;
  showCount?: boolean;
  className?: string;
}

export function RatingStars({
  rating,
  reviews,
  showCount = true,
  className,
}: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < fullStars
                ? "fill-pulp-gold text-pulp-gold"
                : i === fullStars && hasHalfStar
                ? "fill-pulp-gold/50 text-pulp-gold"
                : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
      {showCount && reviews !== undefined && (
        <span className="text-sm text-gray-500">({reviews})</span>
      )}
    </div>
  );
}
