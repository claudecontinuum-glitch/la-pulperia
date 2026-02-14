"use client";

import { useState } from "react";
import { MapPin, Check, ArrowRight, ArrowLeft, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { number: 1, title: "Información básica" },
  { number: 2, title: "Tipo de negocio" },
  { number: 3, title: "Contacto" },
  { number: 4, title: "¡Listo!" },
];

export default function RegistrarPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    type: "",
    hasLocation: false,
    whatsapp: "",
    schedule: "",
  });

  const updateForm = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleGetLocation = () => {
    updateForm("hasLocation", true);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between">
          {steps.map((step) => (
            <div
              key={step.number}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                currentStep >= step.number
                  ? "bg-pulp-orange text-white"
                  : "bg-gray-200 text-gray-500"
              )}
            >
              {currentStep > step.number ? (
                <Check className="h-5 w-5" />
              ) : (
                step.number
              )}
            </div>
          ))}
        </div>
        <div className="h-2 rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-pulp-orange transition-all"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Basic Info */}
      {currentStep === 1 && (
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            ¿Cómo se llama tu negocio?
          </h2>

          <div className="mb-6">
            <label className="mb-2 block text-base font-medium text-gray-700">
              Nombre del negocio
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateForm("name", e.target.value)}
              placeholder="Ej: Baleadas Doña María"
              className="h-14 w-full rounded-xl border border-gray-300 px-4 text-base focus:border-pulp-orange focus:outline-none focus:ring-2 focus:ring-pulp-orange/20"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-base font-medium text-gray-700">
              Categoría
            </label>
            <select
              value={formData.category}
              onChange={(e) => updateForm("category", e.target.value)}
              className="h-14 w-full rounded-xl border border-gray-300 bg-white px-4 text-base focus:border-pulp-orange focus:outline-none focus:ring-2 focus:ring-pulp-orange/20"
            >
              <option value="">Seleccioná una categoría</option>
              <option value="comida">🍽️ Comida</option>
              <option value="tienda">🏪 Tienda</option>
              <option value="servicios">🔧 Servicios</option>
            </select>
          </div>

          <button
            onClick={nextStep}
            disabled={!formData.name || !formData.category}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-pulp-orange text-lg font-semibold text-white transition-colors hover:bg-pulp-orange/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Siguiente
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Step 2: Business Type */}
      {currentStep === 2 && (
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            ¿Cómo vendés?
          </h2>

          <div className="mb-6 space-y-3">
            {[
              { value: "physical", label: "📍 Local físico", desc: "Tengo un lugar donde me visitan" },
              { value: "online", label: "🌐 Solo en línea", desc: "Vendo por redes/WhatsApp con envíos" },
              { value: "both", label: "📍🌐 Ambos", desc: "Tengo local + hago envíos" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateForm("type", option.value)}
                className={cn(
                  "flex w-full flex-col rounded-xl border-2 p-4 text-left transition-colors",
                  formData.type === option.value
                    ? "border-pulp-orange bg-pulp-orange/5"
                    : "border-gray-200 hover:border-gray-300"
                )}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {option.label}
                </span>
                <span className="text-base text-gray-500">{option.desc}</span>
              </button>
            ))}
          </div>

          {(formData.type === "physical" || formData.type === "both") && (
            <button
              onClick={handleGetLocation}
              className={cn(
                "mb-6 flex h-14 w-full items-center justify-center gap-2 rounded-xl border-2 text-lg font-semibold transition-colors",
                formData.hasLocation
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-pulp-green text-pulp-green hover:bg-pulp-green/10"
              )}
            >
              <MapPin className="h-5 w-5" />
              {formData.hasLocation ? "✓ Ubicación guardada" : "📍 Usar mi ubicación"}
            </button>
          )}

          <div className="flex gap-3">
            <button
              onClick={prevStep}
              className="flex h-14 items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.type}
              className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-pulp-orange text-lg font-semibold text-white transition-colors hover:bg-pulp-orange/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Siguiente
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Contact */}
      {currentStep === 3 && (
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            ¿Cómo te contactan?
          </h2>

          <div className="mb-6">
            <label className="mb-2 block text-base font-medium text-gray-700">
              WhatsApp
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => updateForm("whatsapp", e.target.value)}
              placeholder="504 9876 5432"
              className="h-14 w-full rounded-xl border border-gray-300 px-4 text-base focus:border-pulp-orange focus:outline-none focus:ring-2 focus:ring-pulp-orange/20"
            />
            <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <Shield className="h-4 w-4" />
              Solo usamos tu número para que te contacten
            </p>
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-base font-medium text-gray-700">
              Horario (opcional)
            </label>
            <input
              type="text"
              value={formData.schedule}
              onChange={(e) => updateForm("schedule", e.target.value)}
              placeholder="Ej: Lun-Sáb 8am-5pm"
              className="h-14 w-full rounded-xl border border-gray-300 px-4 text-base focus:border-pulp-orange focus:outline-none focus:ring-2 focus:ring-pulp-orange/20"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevStep}
              className="flex h-14 items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.whatsapp}
              className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-pulp-orange text-lg font-semibold text-white transition-colors hover:bg-pulp-orange/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Registrar negocio
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Success */}
      {currentStep === 4 && (
        <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">¡Listo!</h2>
          <p className="mb-8 text-lg text-gray-600">
            Tu negocio <strong>{formData.name}</strong> ya está registrado. Los
            clientes podrán encontrarte y contactarte por WhatsApp.
          </p>
          <a
            href="/mi-negocio"
            className="inline-flex h-14 items-center gap-2 rounded-xl bg-pulp-orange px-8 text-lg font-semibold text-white transition-colors hover:bg-pulp-orange/90"
          >
            Ver mi negocio
          </a>
        </div>
      )}
    </div>
  );
}
