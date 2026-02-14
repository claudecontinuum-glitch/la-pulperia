import { notFound } from "next/navigation";
import { MapPin, Clock, Share2 } from "lucide-react";
import { businesses } from "@/lib/demo-data";
import { CategoryBadge } from "@/components/CategoryBadge";
import { RatingStars } from "@/components/RatingStars";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NegocioPage({ params }: PageProps) {
  const { id } = await params;
  const business = businesses.find((b) => b.id === id);

  if (!business) {
    notFound();
  }

  const typeLabel = {
    physical: "Local físico",
    online: "En línea",
    both: "Local + Envíos",
  };

  return (
    <div className="pb-24">
      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-br from-pulp-orange/30 to-pulp-gold/30 md:h-64" />

      <div className="mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="-mt-8 mb-6 rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
                {business.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <CategoryBadge category={business.category} />
                <span className="text-base text-gray-500">
                  {typeLabel[business.type]}
                </span>
              </div>
            </div>
            <button className="flex h-12 items-center gap-2 rounded-lg border border-gray-300 px-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50">
              <Share2 className="h-5 w-5" />
              Compartir
            </button>
          </div>

          <RatingStars
            rating={business.rating}
            reviews={business.reviews}
            className="mb-4"
          />

          <p className="mb-4 text-base text-gray-600">{business.description}</p>

          {business.schedule && (
            <div className="mb-4 flex items-center gap-2 text-base text-gray-600">
              <Clock className="h-5 w-5 text-gray-400" />
              <span>{business.schedule}</span>
            </div>
          )}

          {business.lat && business.lng && (
            <div className="flex items-center gap-2 text-base text-gray-600">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span>Ver en mapa</span>
            </div>
          )}

          {business.deliveryZones && (
            <div className="mt-4 rounded-lg bg-green-50 p-3">
              <p className="text-sm font-medium text-green-800">
                📦 Envíos a: {business.deliveryZones.join(", ")}
              </p>
            </div>
          )}
        </div>

        {/* Products */}
        {business.products && business.products.length > 0 && (
          <div className="mb-6 rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Productos</h2>
            <div className="divide-y divide-gray-100">
              {business.products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-base text-gray-700">{product.name}</span>
                  <span className="text-lg font-semibold text-pulp-green">
                    L{product.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mini Map */}
        <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-gray-200">
          <div className="text-center">
            <MapPin className="mx-auto mb-2 h-10 w-10 text-gray-400" />
            <p className="text-base text-gray-500">Mapa carga aquí</p>
          </div>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
        <div className="mx-auto max-w-3xl">
          <WhatsAppButton
            whatsapp={business.whatsapp}
            text="Escribir por WhatsApp"
            size="lg"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
