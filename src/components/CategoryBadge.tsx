import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: "comida" | "tienda" | "servicios";
  className?: string;
}

const categoryConfig = {
  comida: {
    label: "Comida",
    emoji: "🍽️",
    bgColor: "bg-orange-100",
    textColor: "text-orange-800",
  },
  tienda: {
    label: "Tienda",
    emoji: "🏪",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  servicios: {
    label: "Servicios",
    emoji: "🔧",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  },
};

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const config = categoryConfig[category];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium",
        config.bgColor,
        config.textColor,
        className
      )}
    >
      <span>{config.emoji}</span>
      {config.label}
    </span>
  );
}
