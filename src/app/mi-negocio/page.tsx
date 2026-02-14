"use client";

import { useState } from "react";
import { MapPin, Plus, Edit, Eye, Package } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MiNegocioPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [products] = useState([
    { name: "Baleada sencilla", price: 15 },
    { name: "Baleada con todo", price: 25 },
    { name: "Baleada especial", price: 35 },
  ]);

  const mockBusiness = {
    name: "Baleadas Doña María",
    category: "comida",
    type: "physical",
    description: "Las mejores baleadas de Siguatepeque desde 1998",
    whatsapp: "50498765432",
    schedule: "Lun-Sáb 6am-10am",
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Mi Negocio</h1>

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-pulp-orange/10 p-3">
              <Eye className="h-6 w-6 text-pulp-orange" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Vistas esta semana</p>
              <p className="text-2xl font-bold text-gray-900">127</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Package className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Contactos por WhatsApp</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
          </div>
        </div>
      </div>

      {/* Open/Closed Toggle */}
      <div className="mb-6 flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Estado actual</h2>
          <p className="text-base text-gray-500">
            {isOpen ? "Los clientes ven que estás abierto" : "Aparecés como cerrado"}
          </p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "relative h-8 w-16 rounded-full transition-colors",
            isOpen ? "bg-green-500" : "bg-gray-300"
          )}
        >
          <div
            className={cn(
              "absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform",
              isOpen ? "left-9" : "left-1"
            )}
          />
        </button>
      </div>

      {/* Business Info */}
      <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Información del negocio
          </h2>
          <button className="flex items-center gap-2 text-pulp-orange hover:underline">
            <Edit className="h-4 w-4" />
            Editar
          </button>
        </div>

        <div className="space-y-3 text-base">
          <div className="flex justify-between">
            <span className="text-gray-500">Nombre:</span>
            <span className="font-medium text-gray-900">{mockBusiness.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Categoría:</span>
            <span className="font-medium text-gray-900">🍽️ Comida</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">WhatsApp:</span>
            <span className="font-medium text-gray-900">{mockBusiness.whatsapp}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Horario:</span>
            <span className="font-medium text-gray-900">{mockBusiness.schedule}</span>
          </div>
        </div>

        <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-pulp-green text-base font-semibold text-pulp-green transition-colors hover:bg-pulp-green/10">
          <MapPin className="h-5 w-5" />
          📍 Actualizar ubicación
        </button>
      </div>

      {/* Products */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Productos</h2>
          <button className="flex items-center gap-2 rounded-lg bg-pulp-orange/10 px-3 py-2 text-sm font-medium text-pulp-orange hover:bg-pulp-orange/20">
            <Plus className="h-4 w-4" />
            Agregar
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3"
            >
              <span className="text-base text-gray-700">{product.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-pulp-green">
                  L{product.price}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <p className="py-8 text-center text-gray-500">
            No tenés productos aún. ¡Agregá uno!
          </p>
        )}
      </div>
    </div>
  );
}
