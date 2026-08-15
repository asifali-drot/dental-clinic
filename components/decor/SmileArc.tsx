import { cn } from "@/lib/utils";

interface SmileArcProps {
  className?: string;
  flip?: boolean;
  tone?: "sky" | "white";
}

/**
 * The site's signature graphic: a single, quiet arcing line echoing the
 * curve of a smile. Used sparingly as a section divider instead of a hard
 * edge or a literal tooth icon.
 */
export default function SmileArc({
  className,
  flip = false,
  tone = "sky",
}: SmileArcProps) {
  const fill = tone === "sky" ? "var(--sky)" : "var(--white)";
  return (
    <div
      aria-hidden="true"
      className={cn("w-full overflow-hidden leading-none", className, flip && "rotate-180")}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-16 w-full sm:h-24"
      >
        <path
          d="M0,32 C 320,110 1120,110 1440,32 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
