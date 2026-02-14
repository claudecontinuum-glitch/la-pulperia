"use client";

import { useState } from "react";
import { Plus, MapPin, Briefcase } from "lucide-react";
import { chambas } from "@/lib/demo-data";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

export default function ChambasPage() {
  const [activeTab, setActiveTab] = useState<"busco_trabajo" | "busco_alguien">(
    "busco_trabajo"
  );

  const filteredChambas = chambas.filter((c) => c.type === activeTab);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Chambas</h1>
        <button className="flex h-12 items-center gap-2 rounded-xl bg-pulp-orange px-6 text-base font-semibold text-white transition-colors hover:bg-pulp-orange/90">
          <Plus className="h-5 w-5" />
          Publicar chamba
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex rounded-xl bg-gray-100 p-1">
        <button
          onClick={() => setActiveTab("busco_trabajo")}
          className={cn(
            "flex-1 rounded-lg py-3 text-base font-semibold transition-colors",
            activeTab === "busco_trabajo"
              ? "bg-white text-gray-900 shadow"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          💼 Busco trabajo
        </button>
        <button
          onClick={() => setActiveTab("busco_alguien")}
          className={cn(
            "flex-1 rounded-lg py-3 text-base font-semibold transition-colors",
            activeTab === "busco_alguien"
              ? "bg-white text-gray-900 shadow"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          👀 Busco a alguien
        </button>
      </div>

      {/* Chambas List */}
      <div className="space-y-4">
        {filteredChambas.map((chamba) => (
          <div
            key={chamba.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-gray-900">{chamba.title}</h3>
              <span className="rounded-full bg-pulp-gold/20 px-3 py-1 text-sm font-medium text-pulp-gold">
                {chamba.category === "comida" && "🍽️ Comida"}
                {chamba.category === "servicios" && "🔧 Servicios"}
                {chamba.category === "tienda" && "🏪 Tienda"}
              </span>
            </div>

            <p className="mb-4 text-base text-gray-600">{chamba.description}</p>

            <div className="mb-4 flex items-center gap-2 text-base text-gray-500">
              <MapPin className="h-5 w-5" />
              <span>{chamba.location}</span>
            </div>

            <WhatsAppButton
              whatsapp={chamba.whatsapp}
              text="Contactar"
              size="md"
            />
          </div>
        ))}

        {filteredChambas.length === 0 && (
          <div className="py-12 text-center">
            <Briefcase className="mx-auto mb-4 h-12 w-12 text-gray-300" />
            <p className="text-lg text-gray-500">
              No hay chambas en esta categoría
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
