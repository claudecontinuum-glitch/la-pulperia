import Link from "next/link";
import { MapPin, Globe } from "lucide-react";
import { Business } from "@/lib/demo-data";
import { CategoryBadge } from "./CategoryBadge";
import { RatingStars } from "./RatingStars";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

interface BusinessCardProps {
  business: Business;
  className?: string;
}

export function BusinessCard({ business, className }: BusinessCardProps) {
  const typeLabel = {
    physical: "Local físico",
    online: "En línea",
    both: "Local + Envíos",
  };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      {/* Placeholder image */}
      <div className="h-32 bg-gradient-to-br from-pulp-orange/20 to-pulp-gold/20" />

      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <Link href={`/negocio/${business.id}`}>
            <h3 className="text-lg font-bold text-gray-900 hover:text-pulp-orange">
              {business.name}
            </h3>
          </Link>
          <CategoryBadge category={business.category} />
        </div>

        <p className="mb-3 line-clamp-2 text-base text-gray-600">
          {business.description}
        </p>

        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          {business.type === "online" ? (
            <Globe className="h-4 w-4" />
          ) : (
            <MapPin className="h-4 w-4" />
          )}
          <span>{typeLabel[business.type]}</span>
        </div>

        <div className="mb-4">
          <RatingStars rating={business.rating} reviews={business.reviews} />
        </div>

        <WhatsAppButton
          whatsapp={business.whatsapp}
          className="w-full"
          size="md"
        />
      </div>
    </div>
  );
}
