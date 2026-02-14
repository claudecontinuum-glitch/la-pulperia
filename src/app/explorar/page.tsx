"use client";

import { useState } from "react";
import { MapPin, Filter } from "lucide-react";
import { businesses } from "@/lib/demo-data";
import { BusinessCard } from "@/components/BusinessCard";

export default function ExplorarPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filteredBusinesses = businesses.filter((b) => {
    if (categoryFilter !== "all" && b.category !== categoryFilter) return false;
    if (typeFilter !== "all" && b.type !== typeFilter) return false;
    return true;
  });

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar Filters */}
      <aside className="border-b border-gray-200 bg-white p-4 lg:w-72 lg:border-b-0 lg:border-r lg:min-h-[calc(100vh-64px)]">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Categoría
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base focus:border-pulp-orange focus:outline-none focus:ring-2 focus:ring-pulp-orange/20"
          >
            <option value="all">Todas</option>
            <option value="comida">🍽️ Comida</option>
            <option value="tienda">🏪 Tiendas</option>
            <option value="servicios">🔧 Servicios</option>
          </select>
        </div>

        {/* Type Filter */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Tipo
          </label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base focus:border-pulp-orange focus:outline-none focus:ring-2 focus:ring-pulp-orange/20"
          >
            <option value="all">Todos</option>
            <option value="physical">Local físico</option>
            <option value="online">En línea</option>
            <option value="both">Local + Envíos</option>
          </select>
        </div>

        <p className="text-sm text-gray-500">
          Mostrando {filteredBusinesses.length} negocios
        </p>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6">
        {/* Map Placeholder */}
        <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-gray-200 lg:h-64">
          <div className="text-center">
            <MapPin className="mx-auto mb-2 h-10 w-10 text-gray-400" />
            <p className="text-base text-gray-500">Mapa carga aquí</p>
          </div>
        </div>

        {/* Business Grid */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              No hay negocios con estos filtros
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
