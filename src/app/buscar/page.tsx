"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { businesses } from "@/lib/demo-data";
import { BusinessCard } from "@/components/BusinessCard";
import { cn } from "@/lib/utils";

export default function BuscarPage() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [minRating, setMinRating] = useState<number>(0);

  const filteredBusinesses = useMemo(() => {
    return businesses.filter((b) => {
      // Search query
      if (
        query &&
        !b.name.toLowerCase().includes(query.toLowerCase()) &&
        !b.description.toLowerCase().includes(query.toLowerCase())
      ) {
        return false;
      }
      // Category
      if (categoryFilter !== "all" && b.category !== categoryFilter) return false;
      // Type
      if (typeFilter !== "all" && b.type !== typeFilter) return false;
      // Rating
      if (b.rating < minRating) return false;
      return true;
    });
  }, [query, categoryFilter, typeFilter, minRating]);

  const clearFilters = () => {
    setQuery("");
    setCategoryFilter("all");
    setTypeFilter("all");
    setMinRating(0);
  };

  const hasActiveFilters =
    query || categoryFilter !== "all" || typeFilter !== "all" || minRating > 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar negocios, productos, servicios..."
            className="h-16 w-full rounded-2xl border border-gray-200 bg-white pl-14 pr-14 text-lg focus:border-pulp-orange focus:outline-none focus:ring-2 focus:ring-pulp-orange/20"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 transition-colors",
              showFilters
                ? "bg-pulp-orange text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-pulp-orange hover:underline"
              >
                <X className="h-4 w-4" />
                Limpiar filtros
              </button>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Category */}
            <div>
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

            {/* Type */}
            <div>
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

            {/* Rating */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Rating mínimo
              </label>
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base focus:border-pulp-orange focus:outline-none focus:ring-2 focus:ring-pulp-orange/20"
              >
                <option value={0}>Cualquiera</option>
                <option value={3}>⭐ 3+</option>
                <option value={4}>⭐ 4+</option>
                <option value={4.5}>⭐ 4.5+</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-base text-gray-600">
          {filteredBusinesses.length} negocios encontrados
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>

      {filteredBusinesses.length === 0 && (
        <div className="py-16 text-center">
          <Search className="mx-auto mb-4 h-12 w-12 text-gray-300" />
          <p className="text-lg text-gray-500">
            No encontramos negocios con esos criterios
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 text-pulp-orange hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
