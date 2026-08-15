import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RatingStars({
  rating = 5,
  className,
  size = "h-4 w-4",
}: {
  rating?: number;
  className?: string;
  size?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            size,
            i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-white/20 text-white/20"
          )}
        />
      ))}
    </div>
  );
}
